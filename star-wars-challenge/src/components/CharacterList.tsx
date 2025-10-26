import { Link } from "react-router-dom";
import { useStarwarsCharacters } from "../queries/useStarwarsCharacters";
import type { StarWarsCharacter } from "../types";

export default function CharacterList() {
  const { data: characters, isLoading, error } = useStarwarsCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <ul className="flex flex-col gap-2">
      {characters?.map((c) => (
        <CharacterListItem key={c.id} character={c} />
      ))}
    </ul>
  );
}

function CharacterListItem({ character }: { character: StarWarsCharacter }) {
  return (
    <li>
      <Link
        to={`/character/${character.id}`}
        className="group flex items-center gap-3 p-3 rounded-xl border border-gray-800 bg-black transition-all duration-500 hover:bg-gradient-to-r hover:from-black hover:via-gray-800 hover:to-gray-600 hover:shadow-md"
      >
        <img
          src={character.image}
          alt={character.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-medium text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
          {character.name}
        </span>
      </Link>
    </li>
  );
}

