import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-white bg-black shadow-md  text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
