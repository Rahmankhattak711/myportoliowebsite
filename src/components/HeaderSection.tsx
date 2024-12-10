import React from "react";

interface HeaderSectionProps {
  eyeBrow: string;
  title: string;
  description: string;
}

export default function HeaderSection({
  eyeBrow,
  title,
  description,
}: HeaderSectionProps) {
  return (
    <div>
      <div className="flex justify-center ">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mt-8  lg:mt-[100px]">
          {eyeBrow}
        </p>
      </div>
      <h1 className="text-3xl md:text-5xl font-serif mt-6 text-center">
        {title}
      </h1>
      <p className="text-center md:text-lg lg:text-lg lg:max-w-lg text-white/60 mt-4 max-w-md mx-auto ">
        {description}
      </p>
    </div>
  );
}
