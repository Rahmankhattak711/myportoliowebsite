import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  classNames?: string;
}

export default function Button({
  text,
  variant,
  icon,
  iconPosition,
  className,
  ...props
}: ButtonProps) {
  const classes = classNames({
    "inline-flex items-center gap-2 bg-white text-gray-900 border border-white rounded-xl h-12 px-6":
      variant === "primary",
    "inline-flex items-center gap-2 border border-white/15 rounded-xl h-12 px-6 ":
      variant === "secondary",
  });

  return (
    <button className={`${classes} ${className} `} {...props}>
      {iconPosition === "left" && icon && <span>{icon}</span>}
      <span className="font-semibold">{text}</span>
      {iconPosition === "right" && icon && <span>{icon}</span>}
    </button>
  );
}
