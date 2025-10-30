import { useState } from "react";
import { Button } from "./ui/Button";
import type { StarWarsCharacter } from "../types";
import { isEvil } from "../utils/evil";
import { useTeam } from "@/hooks/useTeam";

interface AddRemoveButtonsProps {
  character: StarWarsCharacter;
}

export const AddRemoveButtons: React.FC<AddRemoveButtonsProps> = ({
  character,
}) => {
  const { state, dispatch } = useTeam();

  const inTeam = state.ids.includes(character.id);
  const teamFull = state.ids.length >= 5;
  const evil = isEvil(character);

  const [msg, setMsg] = useState<string | null>(null);

  const showMsg = (text: string) => {
    setMsg(text);
    setTimeout(() => setMsg(null), 5000);
  };

  function handleAdd() {
    if (evil) return showMsg("This character is evil and cannot be added.");
    if (inTeam) return showMsg("This character is already in your team.");
    if (teamFull)
      return showMsg("Your team is full (max 5). Remove someone first.");

    dispatch({ type: "add", id: character.id });
    showMsg("Added to your team!");
  }

  function handleRemove() {
    if (!inTeam) return showMsg("This character is not in your team.");

    dispatch({ type: "remove", id: character.id });
    showMsg("Removed from your team.");
  }

  return (
    <div className="mb-6 space-y-2">
      <div className="flex justify-between">
        <Button onClick={handleAdd} disabled={evil || teamFull || inTeam}>
          {evil
            ? "Cannot add (evil)"
            : teamFull
              ? "Team full"
              : inTeam
                ? "Already in team"
                : "Add to team"}
        </Button>

        <Button variant="outline" onClick={handleRemove} disabled={!inTeam}>
          Remove from team
        </Button>
      </div>

      {msg && (
        <p className="text-sm text-gray-400 text-center transition-opacity">
          {msg}
        </p>
      )}
    </div>
  );
};
