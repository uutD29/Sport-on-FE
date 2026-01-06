import React from "react";

type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "normal",
  type = "button",
  ...props
}: TButtonProps) => {
  const baseStyles =
    "inline-flex gap-2 justify-center items-center cursor-pointer duration-300 hover:scale-105";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-light",
    dark: "bg-dark text-white hover:bg-dark-alternate",
    ghost: "bg-transparent hover:bg-gray-100 text-dark",
  };

  const sizeStyles = {
    normal: "px-9 py-4",
    small: "px-7 py-[10px]",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
