import type { StarWarsCharacter } from "../types";

export const hasSithWord = (s?: string | null) =>
  !!s && /(darth|sith)/i.test(s);

// helper: altijd een array teruggeven
function toArray<T = string>(value: unknown): T[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim() !== "")
    return value.split(/[,|]/).map((s) => s.trim()) as T[];
  return [];
}

export const isEvil = (c: StarWarsCharacter | null | undefined): boolean => {
  if (!c) return false;

  // 1) naam bevat Darth of Sith
  if (hasSithWord(c.name)) return true;

  // 2) affiliaties met Sith of Darth
  const affiliations = toArray(c.affiliations);
  if (affiliations.some((a) => hasSithWord(a))) return true;

  // 3) masters met 'Darth' in hun naam
  const masters = toArray(c.masters);
  if (masters.some((m) => /darth/i.test(String(m)))) return true;

  return false;
};
