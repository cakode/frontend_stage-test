export function formatValue(value?: number | null, unit?: string) {
  return typeof value === "number" && !Number.isNaN(value)
    ? `${value} ${unit ?? ""}`
    : "Unknown";
}

export function initials(fullName: string) {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
}
