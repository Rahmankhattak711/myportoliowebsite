import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const testimonialContent = [
    "Performent",
    "Accessiable",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable ",
    "Reliable",
  ];
  return (
    <div className="py-24">
      <div className="flex bg-gradient-to-r from-emerald-300 to-sky-300 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {testimonialContent.map((content) => (
              <div key={content} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {content}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};