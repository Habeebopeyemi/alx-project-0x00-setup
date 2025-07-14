import React from "react";
import type { ButtonProps } from "@/interfaces";

const Button = ({ title, styles }: ButtonProps) => {
  const { size = "medium", shape = "rounded-md" } = styles;

  const sizeClass =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base";

  return (
    <button className={`bg-blue-500 text-white ${sizeClass} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
