import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

  const variants = {
    primary:
      "bg-[#003347] border-2 border-white text-white hover:bg-white hover:border-[#003347] hover:text-[#003347] shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-[#003347] border-2 border-white hover:bg-[#003347] hover:text-white hover:shadow-md",
  };

  // Safe onClick handler: supports functions or string messages
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    } else if (typeof onClick === "string") {
      alert(onClick);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
