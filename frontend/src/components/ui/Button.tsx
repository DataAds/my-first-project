import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  // Фолбэк, чтобы кнопка была видна даже без Tailwind
  const fallback =
    { padding: "10px 16px", background: "#0f63c8", color: "#fff",
      border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600 } as React.CSSProperties;

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-2xl bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-medium transition ${className}`}
      style={fallback}
    >
      {children}
    </button>
  );
};

