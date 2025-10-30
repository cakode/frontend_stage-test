import { useContext } from "react";
import { TeamContext } from "../providers/TeamProvider";

export const useTeam = () => {
  const ctx = useContext(TeamContext);
  if (!ctx) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return ctx;
};
