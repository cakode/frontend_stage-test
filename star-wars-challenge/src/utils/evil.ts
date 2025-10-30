import type { StarWarsCharacter } from "../types";

export const hasSithWord = (s?: string | null) =>
  !!s && /(darth|sith)/i.test(s);

function toArray<T = string>(value: unknown): T[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim() !== "")
    return value.split(/[,|]/).map((s) => s.trim()) as T[];
  return [];
}

export const isEvil = (c: StarWarsCharacter | null | undefined): boolean => {
  if (!c) return false;

  if (hasSithWord(c.name)) return true;

  const affiliations = toArray(c.affiliations);
  if (affiliations.some((a) => hasSithWord(a))) return true;

  const masters = toArray(c.masters);
  if (masters.some((m) => /darth/i.test(String(m)))) return true;

  return false;
};
