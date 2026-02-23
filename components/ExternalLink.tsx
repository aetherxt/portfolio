"use client";

import { useState } from "react";

interface ExternalLinkProps {
    text: string;
    hoverText?: string;
    url?: string;
    onClick?: () => void;
    className?: string; // Adding className for flexible styling if needed
}

export default function ExternalLink({
    text,
    hoverText,
    url,
    onClick,
    className = "",
}: ExternalLinkProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <div
            className={`pr-2 cursor-pointer transition-all w-fit ${className} ${!hoverText && isHovered
                ? "!text-indigo-900 dark:!text-indigo-100"
                : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            {hoverText && isHovered ? (
                hoverText
            ) : (
                <span className="inline">
                    <span className="underline decoration-current/70 underline-offset-4">
                        {text}
                    </span>
                    <svg
                        className="w-[1em] h-[1em] inline-block ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                </span>
            )}
        </div>
    );
}
