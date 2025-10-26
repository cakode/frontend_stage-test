import { useParams } from "react-router-dom";
import CharacterDetailCard from "../components/CharacterDetailCard";
import { useStarwarsCharacterById } from "../queries/useStarwarsCharacterById";
import CharacterNavigationButtons from "../components/CharacterNavigationButtons";
import { TeamButtons } from "../components/team/TeamButtons";

export default function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const characterId = Number(id);
  const { data, isLoading, isError, error } = useStarwarsCharacterById(characterId);

  if (isLoading) return <p>Loading character...</p>;
  if (isError) return <p className="text-red-600">{error.message}</p>;
  if (!data) return <p>Character not found</p>;

  return (
    <div className="max-w-xl mx-auto">
      <TeamButtons character={data} />
      <CharacterDetailCard character={data} />
      <CharacterNavigationButtons />
    </div>
  );
}