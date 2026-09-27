import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-roxo/40 bg-roxo/10 px-3 py-1 text-xs font-semibold text-cinza-claro ${className}`}
    >
      {children}
    </span>
  );
}
