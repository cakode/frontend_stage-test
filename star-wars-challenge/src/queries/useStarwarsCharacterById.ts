import { useQuery } from "@tanstack/react-query";
import { fetchStarwarsCharacterById } from "../api/starwarsApi";
import type { StarWarsCharacter } from "../types";

export function useStarwarsCharacterById(id: number) {
  return useQuery<StarWarsCharacter, Error>({
    queryKey: ["starwarsCharacter", id],
    queryFn: () => {
      if (!id) throw new Error("Character ID is required");
      return fetchStarwarsCharacterById(id);
    },
    enabled: !!id, // fetch pas als id bestaat
    staleTime: 1000 * 60 * 5, // 5 min cache
    retry: 1, // 1 retry bij netwerkfout
  });
}
