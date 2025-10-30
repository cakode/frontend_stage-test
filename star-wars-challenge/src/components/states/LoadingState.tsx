import { Spinner } from "@/components/ui/spinner";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({
  message = "Loading...",
  className = "",
}: LoadingStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-10 ${className}`}
    >
      <Spinner className="text-purple-500" />
      <span className="mt-2 text-purple-500 font-medium">{message}</span>
    </div>
  );
}
