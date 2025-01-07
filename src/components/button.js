import React from "react";

const Button = ({ children, variant, size, className, ...props }) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-colors";
  const variantStyles = {
    outline: "border border-gray-300 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700",
    solid: "bg-blue-600 hover:bg-blue-700 text-white",
  };
  const sizeStyles = {
    icon: "p-2",
    default: "text-sm",
  };

  const appliedClasses = [
    baseStyles,
    variantStyles[variant] || variantStyles.solid,
    sizeStyles[size] || sizeStyles.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={appliedClasses} {...props}>
      {children}
    </button>
  );
};

export { Button };
