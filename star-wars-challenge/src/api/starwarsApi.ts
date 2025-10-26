import type { StarWarsCharacter } from "../types";

const BASE_URL = "https://akabab.github.io/starwars-api/api";

export async function fetchStarwarsCharacters(): Promise<StarWarsCharacter[]> {
    const response = await fetch(`${BASE_URL}/all.json`);
    if (!response.ok) {
        throw new Error(`Failed to fetch Star Wars characters: ${response.status}`);
    }
    return (await response.json()) as StarWarsCharacter[];
}

export async function fetchStarwarsCharacterById(id: number): Promise<StarWarsCharacter> {
    if (!id) throw new Error("Character ID is required");
    const response = await fetch(`${BASE_URL}/id/${id}.json`);
    if (!response.ok) throw new Error(`Failed to fetch character with id ${id}: ${response.status}`);
    return (await response.json()) as StarWarsCharacter;
}