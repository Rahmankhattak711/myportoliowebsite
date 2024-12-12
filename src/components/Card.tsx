import React from "react";

type PropsWithChildren = {
  children: React.ReactNode;
  className?: string;
};
export default function Card({ children, className }: PropsWithChildren) {
  return (
    <div
      className={`bg-gray-800 overflow-hidden p-4 rounded-3xl border-2 border-white/10 ${className}`}
    >
      {children}
    </div>
  );
}
