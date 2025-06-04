import React from "react";

const CustomLabel = ({
    children,
    size,
    bold = false,
    color = "text-gray-800",
    className = "",
}: {
    children: React.ReactNode,
    size: "xs" | "sm" | "base" | "lg" | "xl" | "xl2",
    bold?: boolean,
    color?: string,
    className?: string,
}) => {

    const sizeClasses = {
        xs: "text-xs sm:text-sm md:text-base",      // xs → sm → base
        sm: "text-sm sm:text-base md:text-lg",      // sm → base → lg
        base: "text-base sm:text-lg md:text-xl",    // base → lg → xl
        lg: "text-lg sm:text-xl md:text-2xl",      // lg → xl → 2xl
        xl: "text-xl sm:text-2xl md:text-3xl",     // xl → 2xl → 3xl
        xl2: "text-2xl sm:text-3xl md:text-4xl",   // 2xl → 3xl → 4xl
    };

    return (
        <p
            className={`
        ${sizeClasses[size]} 
        ${bold ? "font-bold" : "font-normal"}
        ${color}
        ${className}
      `}
        >
            {children}
        </p>
    );
};

export default CustomLabel;