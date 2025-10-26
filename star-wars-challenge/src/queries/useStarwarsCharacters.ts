import { useQuery } from '@tanstack/react-query';
import type { StarWarsCharacter } from '../types';
import { fetchStarwarsCharacters } from '../api/starwarsApi';

export function useStarwarsCharacters() {
  return useQuery<StarWarsCharacter[]>({
    queryKey: ['starwarsCharacters'],
    queryFn: fetchStarwarsCharacters,
    staleTime: 1000 * 60 * 10, // 10 minuten cache
  });
}
