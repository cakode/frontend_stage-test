import { Link } from "react-router-dom";
import { useTeam } from "../../store/teamStore";
import { useStarwarsCharacterById } from "../../queries/useStarwarsCharacterById";
import { Button } from "../ui/Button";

export default function TeamMemberCard({ id }: { id: number }) {
    const { dispatch } = useTeam();
    const { data, isLoading, isError } = useStarwarsCharacterById(id);


    if (isLoading) return <div className="p-4 border rounded-xl">Loading…</div>;
    if (isError || !data) return <div className="p-4 border rounded-xl">Character not found</div>;


    return (
        <div className="p-4 border rounded-xl flex items-center justify-between gap-3">
            <div className="min-w-0">
                <div className="font-medium truncate">{data.name}</div>
                <Link to={`/character/${id}`}
                    className="
                        text-gray-400 text-sm
                        transition-all duration-200
                        hover:text-gray-400 hover:underline
                    ">
                    View
                </Link>
            </div>
            <Button variant="outline" onClick={() => dispatch({ type: "remove", id })}>
                Remove
            </Button>
        </div>
    );
}