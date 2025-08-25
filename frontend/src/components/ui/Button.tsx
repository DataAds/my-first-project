import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  // fallback-стили на случай, если Tailwind не собрался
  const fallback =
    "padding:10px 16px;background:#0f63c8;color:#fff;border:none;border-radius:12px;cursor:pointer;font-weight:600";

  return (
    <button
      {...props}
      style={{} as React.CSSProperties}
      className={`px-4 py-2 rounded-2xl bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-medium transition ${className}`}
    >
      <span style={{ all: "unset" }}>
        {children}
      </span>
    </button>
  );
};

