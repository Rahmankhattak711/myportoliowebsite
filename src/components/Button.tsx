import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "primary" | "secondary" | "informative";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  classNames?: string;
  iconPositionClass?: string;
}

export default function Button({
  text,
  variant,
  icon,
  iconPosition,
  className,
  iconPositionClass,
  ...props
}: ButtonProps) {
  const classes = classNames({
    "inline-flex items-center gap-2 bg-white text-gray-900 border border-white rounded-xl h-12 px-6":
      variant === "primary",
    "inline-flex items-center bg-gray-800 text-white gap-2 border border-white/15 rounded-xl h-12 px-6 ":
      variant === "secondary",
    "inline-flex items-center gap-2 text-gray-900 bg-gradient-to-r to-emerald-300 from-sky-400 border border-white/15 rounded-full h-10 px-6":
      variant === "informative",
  });

  return (
    <button className={`${classes} ${className} `} {...props}>
      {iconPosition === "left" && icon && (
        <span className={`${iconPositionClass}`}>{icon}</span>
      )}
      <span className="font-semibold">{text}</span>
      {iconPosition === "right" && icon && (
        <span className={`${iconPositionClass}`}>{icon}</span>
      )}
    </button>
  );
}
