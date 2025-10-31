## frontend_stage-test
A small front‑end app that lists Star Wars characters, shows a detail view with next/previous navigation, and lets you assemble a team of up to 5 non‑evil members. Built to demonstrate TypeScript/JavaScript skills, framework usage, state management, clean code, and UI craft.

API: https://akabab.github.io/starwars-api/

## 🧪 Technologies & Tools
- TypeScript  
- CSS / Tailwind 
- JavaScript  
- HTML  
- React, Vite
- Prettier, ShadCN 
- Tanstack query

## Features
- Characters list with name and image
- Character detail page (name, image, height, mass, affiliations)
- Next / Previous navigation between characters from detail view
- Add/Remove to Team from detail 
- Global Team Bar visible on all pages with count and quick remove
- Team capacity enforced (max 5 members)
- Auto‑block evil characters based on clear domain rules (see below)
- Styled using pure CSS & tailwind

## 🔧 Getting Started
1) Install deps
- npm install

2) Run dev server
- npm run dev

## ⚙️ Performance Choices

- The app uses a static REST API, so both React Query hooks use staleTime: 1h — this minimizes redundant requests while still - - allowing background updates if the API ever changes.
- retry: 1 prevents repeated failed fetch attempts.
- Strong typing with StarWarsCharacter ensures reliable, cached data and smooth navigation between views.


## 🗃️ State Management
- State management is handled entirely on the client side using React Context and useReducer, without any external libraries.
- Provider: TeamProvider maintains the list of selected team IDs in a simple reducer (add, remove, hydrate).
- Persistent storage: The current team IDs are automatically saved to localStorage under the key sw-team-ids, ensuring the selection is preserved when the page is reloaded.
- Constraints: The team can have a maximum of 5 members; duplicate IDs are ignored.
- Custom Hook: useTeam() provides access to the state and dispatch from within components.
- Works only inside <TeamProvider>.
- Throws an error if useTeam() is used outside the provider (safety check).

## 🧭 App Structure
- Function-based architecture using React components and hooks  
- Simple, flat folder structure chosen intentionally for clarity and fast navigation in a small project  
- Clear separation between pages, components, and providers

## 🧠 Domain Logic — “Evil” detection
- A character is evil if any of the following is true:
- name contains "Darth" or "Sith" (case‑insensitive)
- Affiliations include any string containing "Darth" or "Sith"
- Masters list contains a name with "Darth"

## 🗺️ Routing & Navigation
- / → Listpage shows all the characters
- /character/:id → Detail page with Next / Previous buttons that navigate using the list order
- /team → Team page: shows all members (remove members, view detail) 
- A persistent Team Bar is visible across routes to review/manage the selection quickly


## Installation & Setup
- npm create vite@latest

◇  Project name:
│  star-wars-challenge
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC

## Clone this repository
- git clone https://github.com/cakode/frontend_stage-test.git
- cd frontend_stage-test 
- cd star-wars-challenge

## 🤖 AI Usage — Prompts Used

🧩 Prompt 1 — Define the TypeScript interface for a Star Wars character

“Given a JSON example of a Star Wars character from the public API, create a TypeScript interface named StarWarsCharacter.
Each property should use the correct type (string, number, string[], or optional fields with ?).

🧩 Prompt 2 — Fetch Star Wars data

“Write TypeScript functions using the native fetch API to get data from https://akabab.github.io/starwars-api/api.
fetchStarwarsCharacters() → fetch /all.json, return Promise<StarWarsCharacter[]>
fetchStarwarsCharacterById(id) → fetch /id/{id}.json, return Promise<StarWarsCharacter>
Include basic error handling and use the imported StarWarsCharacter interface for typing.”

🧩 Prompt 3 — Detect “evil” Star Wars characters

“Create a TypeScript utility that determines whether a StarWarsCharacter is evil.
Write a helper hasSithWord() to check if a string includes ‘Darth’ or ‘Sith’ (case-insensitive).
Write a safe toArray() converter to normalize string or array values.
Implement isEvil(character) returning true if the name, any affiliation, or any master contains ‘Darth’ or ‘Sith’.
Handle null/undefined inputs safely.”

🧩 Prompt 4 — Format numeric values

Write a small TypeScript helper formatValue(value, unit) that returns a formatted string like '172 cm' when the value is a valid number, or 'Unknown' if it’s null, undefined, or NaN.”

🧩 Prompt 5 — Generate initials from a name

“Create a TypeScript utility function initials(fullName) that splits a name by spaces and returns the uppercase initials of up to the first two words (e.g., 'Luke Skywalker' → 'LS').”

🧩 Prompt 6 — Create a global TeamRail component

“Build a React component TeamRail that displays the current team members on every page.
Use the useTeam() hook to access member IDs and allow removing members via dispatch.
For each ID, fetch character details with useStarwarsCharacterById(id).
Show a loading spinner while fetching and skip rendering on error.
Render each member as a small chip with avatar, name, and a remove (‘✕’) button.”

🧩 Prompt 7 — Team state (separate Provider + Hook)

“Implement team state with two separate modules:

TeamProvider (Context + useReducer) that manages ids: number[] with actions add | remove | hydrate, enforces max 5 and no duplicates, and persists to localStorage (sw-team-ids) with hydrate on mount.

useTeam() hook in a separate file that reads the context and throws if used outside the provider.
API surface: Provider returns { state, dispatch } only.”

🧩 Prompt 8 — Reusable Button component with variants

“Create a reusable React Button component in TypeScript that accepts an optional variant prop ('primary' | 'outline' | 'ghost').
Extend React.ButtonHTMLAttributes<HTMLButtonElement> for native props.
Apply shared base styles and variant-specific classes.
Use a utility cn() to merge classes.
Support disabled state with proper opacity and cursor styling.”

🧩 Prompt 9 — React Query hooks for Star Wars data

“Create two typed React Query hooks in TypeScript:
- useStarwarsCharacters() → fetches all characters with fetchStarwarsCharacters.
- useStarwarsCharacterById(id) → fetches a single character using fetchStarwarsCharacterById(id).
- Use StarWarsCharacter for typing, set staleTime: 1h, retry: 1, and enable the by-id query only when id is true.”

🧩 Prompt 10 — Add/Remove team buttons

“Create a React AddRemoveButtons component:
- Use useTeam() to add or remove members.
- Block adding if the character is evil, already in team, or team is full (max 5).
- Show temporary feedback messages.
- Include an ‘Add to team’ and an outline ‘Remove from team’ button with proper disabled states.”