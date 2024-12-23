import { PropsWithChildren } from "react";

export default function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
      <div className="animate-spin [animation-duration:30s]">
        <div
          className=" flex items-start justify-start "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className="inline-flex"
            style={{
              transform: `rotate(-${rotation * -4}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
