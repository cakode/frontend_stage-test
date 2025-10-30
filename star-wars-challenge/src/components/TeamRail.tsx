import { useTeam } from "@/hooks/useTeam";
import { useStarwarsCharacterById } from "../queries/useStarwarsCharacterById";
import { Spinner } from "./ui/spinner";

export default function TeamRail() {
  const { state } = useTeam();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs uppercase tracking-wider text-neutral-400">
        Your team
      </span>
      {state.ids.length === 0 && (
        <span className="text-sm text-neutral-400">
          Empty. Add up to five heroes.
        </span>
      )}
      {state.ids.map((id) => (
        <TeamChip key={id} id={id} />
      ))}
    </div>
  );
}

function TeamChip({ id }: { id: number }) {
  const { dispatch } = useTeam();
  const { data: c, isLoading, isError } = useStarwarsCharacterById(id);

  if (isLoading) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-2 py-0.5 text-xs">
        <Spinner className="h-3 w-3 text-purple-500" />
        <span className="text-purple-400">Loading…</span>
      </span>
    );
  }

  if (isError || !c) return null;

  return (
    <button
      className="group inline-flex items-center gap-1 rounded-full bg-neutral-800 px-2 py-0.5 text-xs"
      onClick={() => dispatch({ type: "remove", id })}
      title={`Remove ${c.name}`}
    >
      {c.image && (
        <img
          src={c.image}
          alt=""
          className="h-5 w-5 rounded-full object-cover"
        />
      )}
      <span>{c.name}</span>
      <span
        aria-hidden
        className="transition-colors group-hover:text-[#7a00ff]"
      >
        ✕
      </span>
    </button>
  );
}
