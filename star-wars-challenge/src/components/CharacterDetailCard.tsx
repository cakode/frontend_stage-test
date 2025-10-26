import { cn } from "../utils/helpers";
import type { StarWarsCharacter } from "../types";
import { formatValue, initials } from "../utils/formatting";

type CharacterDetailCardProps = {
  character: StarWarsCharacter;
  className?: string;
};

export default function CharacterDetailCard({ character, className }: CharacterDetailCardProps) {
  const { name, image, height, mass, affiliations } = character;

  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-md",
        "flex flex-col items-center text-center",
        className
      )}
    >
      {/* Afbeelding */}
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-64 object-contain bg-neutral-100"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center bg-neutral-100">
          <span className="text-5xl font-extrabold text-neutral-300">
            {initials(name)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5 w-full">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-3">{name}</h1>

        <div className="flex justify-center gap-6 text-sm text-neutral-700 mb-4">
          <p>
            <span className="font-medium">Height:</span>{" "}
            <span className="font-semibold text-neutral-900">
              {formatValue(height, "m")}
            </span>
          </p>
          <p>
            <span className="font-medium">Mass:</span>{" "}
            <span className="font-semibold text-neutral-900">
              {formatValue(mass, "kg")}
            </span>
          </p>
        </div>

        {affiliations && affiliations.length > 0 && (
          <div className="mt-4">
            <h2 className="text-sm font-semibold text-neutral-700 mb-2">
              Affiliations
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {affiliations.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}