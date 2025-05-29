"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
