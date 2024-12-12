import React from "react";
import StarIcon from "@/assets/icons/star.svg";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string
}

export default function CardHeader({ title, description,className }: CardHeaderProps) {
  return (
    <div className={className}>
      <div className={`inline-flex gap-4 `}>
        <StarIcon className="text-emerald-300 size-8" />
        <h1 className="text-3xl font-serif">{title}</h1>
      </div>
      <p className="mt-2 text-white/60 text-sm">{description}</p>
    </div>
  );
}
