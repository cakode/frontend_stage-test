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
    enabled: !!id,
    staleTime: Infinity,
    retry: 1,
  });
}
