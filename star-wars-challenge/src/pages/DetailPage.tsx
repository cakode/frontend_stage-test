import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import { useStarwarsCharacterById } from "../queries/useStarwarsCharacterById";
import { AddRemoveButtons } from "../components/AddRemoveButtons";
import DetailNavigationButtons from "../components/DetailNavigationButtons";
import { LoadingState } from "@/components/states/LoadingState";
import { ErrorState } from "@/components/states/ErrorState";
import { EmptyState } from "@/components/states/EmptyState";

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const characterId = Number(id);
  const { data, isLoading, isError, error } =
    useStarwarsCharacterById(characterId);

  if (isLoading) return <LoadingState message="Loading character..." />;
  if (isError) return <ErrorState error={error} />;
  if (!data) return <EmptyState message="Character not found" />;

  return (
    <div className="max-w-xl mx-auto">
      <AddRemoveButtons character={data} />
      <DetailCard character={data} />
      <DetailNavigationButtons />
    </div>
  );
}
