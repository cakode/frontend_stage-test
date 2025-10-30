import { useQuery } from "@tanstack/react-query";
import type { StarWarsCharacter } from "../types";
import { fetchStarwarsCharacters } from "../api/starwarsApi";

export function useStarwarsCharacters() {
  return useQuery<StarWarsCharacter[]>({
    queryKey: ["starwarsCharacters"],
    queryFn: fetchStarwarsCharacters,
    staleTime: Infinity,
    retry: 1,
  });
}
