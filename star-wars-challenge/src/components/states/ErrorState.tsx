interface ErrorStateProps {
  error: unknown;
  className?: string;
}

export function ErrorState({ error, className = "" }: ErrorStateProps) {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "Something went wrong";

  return (
    <div className={`text-red-600 text-center py-10 ${className}`}>
      <p className="font-semibold">Error</p>
      <p>{message}</p>
    </div>
  );
}
