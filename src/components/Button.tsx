import React from "react";

const Button = ({ children = "Order Now", variant = "primary", color = "#00bfff" }) => {
  const base =
    "cursor-pointer hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-medium";

  if (variant === "primary") {
    return (
      <button
        className={base}
        style={{
          backgroundColor: color,
          color: "#fff",
        }}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        className={base}
        style={{
          border: `2px solid ${color}`,
          color: color,
          backgroundColor: "transparent",
        }}
      >
        {children}
      </button>
    );
  }

  return null;
};

export default Button;