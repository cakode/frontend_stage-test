import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function Button({
  className,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-xl font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-400 text-gray-200 hover:bg-gray-100 ",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
