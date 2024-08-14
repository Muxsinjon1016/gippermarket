import React from "react";
import clsx from "clsx";

export const Input = ({
  type,
  placeholder,
  variant,
  className,
  label,
  name,
  onChange,
  register = () => ({}),
}) => {
  const variants = {
    default: "bg-eee font-semibold",
  };

  return (
    <>
      <div>
        <label className="font-bold text-lg" htmlFor={name}>
          {label}
        </label>
        <input
          onChange={onChange}
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={clsx(
            "outline-none w-[380%]",
            variants[variant],
            className
          )}
        />
      </div>
    </>
  );
};

export default Input;
