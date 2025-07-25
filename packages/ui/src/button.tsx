"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`text-red-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 font-extrabold rounded-2xl text-xl px-8 py-4 me-3 mb-3 shadow-lg transform hover:scale-105 transition-all duration-200 ${className}`}
      onClick={() => alert(`Hello`)}

    >
      {children}
    </button>
  );
};
