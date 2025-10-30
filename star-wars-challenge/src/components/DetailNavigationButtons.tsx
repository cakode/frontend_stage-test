import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/Button";
import { useStarwarsCharacters } from "../queries/useStarwarsCharacters";

export default function DetailNavigationButtons() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);

  const { data: characters, isLoading } = useStarwarsCharacters();
  if (isLoading || !characters?.length) return null;

  const ids = characters.map((c) => c.id).sort((a, b) => a - b);
  const currentIndex = ids.indexOf(currentId);

  const prevId = currentIndex > 0 ? ids[currentIndex - 1] : null;
  const nextId =
    currentIndex >= 0 && currentIndex < ids.length - 1
      ? ids[currentIndex + 1]
      : null;

  const handlePrev = () => prevId && navigate(`/character/${prevId}`);
  const handleNext = () => nextId && navigate(`/character/${nextId}`);

  return (
    <div className="flex justify-between mt-6">
      <Button onClick={handlePrev} disabled={!prevId} variant="outline">
        ← Previous
      </Button>
      <Button onClick={handleNext} disabled={!nextId} variant="outline">
        Next →
      </Button>
    </div>
  );
}
