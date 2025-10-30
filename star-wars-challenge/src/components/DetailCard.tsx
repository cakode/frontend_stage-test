import type { StarWarsCharacter } from "../types";
import { formatValue, initials } from "../utils/formatting";
import Card from "./ui/Card";

interface DetailCardProps {
  character: StarWarsCharacter;
}

export default function DetailCard({ character }: DetailCardProps) {
  const { name, image, height, mass, affiliations } = character;

  return (
    <Card className="w-full max-w-md mx-auto flex flex-col items-center text-center">
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full max-h-64 object-contain border border-gray-500"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center bg-neutral-900 border border-gray-700 rounded-xl">
          <span className="text-5xl font-extrabold text-neutral-700">
            {initials(name)}
          </span>
        </div>
      )}
      <div className="p-5 w-full">
        <h1 className="text-2xl font-semibold mb-3">{name}</h1>

        <div className="flex justify-center gap-6 text-sm mb-4">
          <p>
            <span className="font-medium text-gray-300">Height:</span>{" "}
            <span className="font-semibold text-white">
              {formatValue(height, "m")}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-300">Mass:</span>{" "}
            <span className="font-semibold text-white">
              {formatValue(mass, "kg")}
            </span>
          </p>
        </div>
        {affiliations && affiliations.length > 0 && (
          <div className="mt-4">
            <h2 className="text-sm font-semibold text-gray-300 mb-2">
              Affiliations:
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {affiliations.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
