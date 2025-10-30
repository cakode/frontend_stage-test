import { FileQuestion } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  className?: string;
}

export function EmptyState({
  message = "No data found",
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-10 text-gray-500 ${className}`}
    >
      <FileQuestion className="h-8 w-8 mb-2" />
      <span className="font-medium">{message}</span>
    </div>
  );
}
