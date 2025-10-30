import { useTeam } from "@/hooks/useTeam";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamList() {
  const { state } = useTeam();

  if (!state.ids.length) {
    return (
      <div className="p-4 border rounded-xl text-sm text-gray-600">
        Your team is still empty. Add a character from the detail page.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 text-sm text-gray-400">
        Team members ({state.ids.length}/5)
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {state.ids.map((id) => (
          <TeamMemberCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
