import clsx from "clsx";
import React from "react";

export const Button = ({
  children,
  startIcon,
  endIcon,
  type,
  className,
  variant,
  onClick,
  key,
}) => {
  const variants = {
    default: "py-[10px] px-[12px] bg-gipermart flex items-center gap-3",
    danger:
      "py-[10px] text-white px-[12px] bg-[#E44542] flex items-center gap-3",
  };

  return (
    <button
      key={key}
      onClick={onClick}
      className={clsx(
        "block transition-all duration-300",
        variants[variant],
        className
      )}
      type={type}
    >
      <span className="block mx-auto">{startIcon}</span>
      <span className="block mx-auto">{children}</span>
      <span className="block mx-auto">{endIcon}</span>
    </button>
  );
};

export default Button;
