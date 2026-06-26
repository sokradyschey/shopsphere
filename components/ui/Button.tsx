"use client";
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = 
        "px-4 py-2 rounded-md font-medium transition focus:outline-none";

    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
        secondary:
            "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100",
    };
    return (
        <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
        />
    );
}