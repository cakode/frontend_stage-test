import * as React from "react";
import { cn } from "../utils/helpers";

interface TagProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
};

export default function Tag({ children, title, className }: TagProps) {
    return (
        <span
            title={title}
            className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
                className
            )}
        >
            {children}
        </span>
    );
}
