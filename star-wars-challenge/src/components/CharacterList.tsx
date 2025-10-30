import { Link } from "react-router-dom";
import { useStarwarsCharacters } from "../queries/useStarwarsCharacters";
import type { StarWarsCharacter } from "../types";
import { LoadingState } from "@/components/states/LoadingState";
import { ErrorState } from "@/components/states/ErrorState";
import { EmptyState } from "@/components/states/EmptyState";

export default function CharacterList() {
  const { data: characters, isLoading, error } = useStarwarsCharacters();

  if (isLoading) return <LoadingState message="Loading characters..." />;
  if (error) return <ErrorState error={error} />;
  if (!characters || characters.length === 0)
    return <EmptyState message="No characters found" />;

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
        className="group flex items-center gap-3 p-3 rounded-xl border-1 border-white bg-black transition-all duration-300"
      >
        <img
          src={character.image}
          alt={character.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-medium text-white transition-all duration-300 group-hover:text-[#7a00ff] group-hover:-translate-y-[3px]">
          {character.name}
        </span>
      </Link>
    </li>
  );
}
