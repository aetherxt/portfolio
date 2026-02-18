"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    const linkClass = (path: string) => {
        const baseClass = "text-lg mr-8 transition-all";
        const hoverClass = !isActive(path) ? "hover:bg-indigo-100 hover:text-indigo-900" : "";
        const activeClass = isActive(path) ? "underline decoration-2 underline-offset-4" : "";
        return `${baseClass} ${hoverClass} ${activeClass}`.trim();
    };

    return (
        <div className="flex w-full place-self-start sticky top-0 z-10 bg-gradient-to-b from-stone-50/95 via-stone-50/60 to-stone-50/0 dark:from-stone-900/95 dark:via-stone-900/60 dark:to-stone-900/0 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center my-10 mx-10 sm:mx-20 select-none gap-3 sm:gap-5">
                <a
                    href="/"
                    className={linkClass("/")}
                >
                    home
                </a>
                <a
                    href="/projects"
                    className={linkClass("/projects")}
                >
                    projects
                </a>
                <a
                    href="/photography"
                    className={linkClass("/photography")}
                >
                    photography
                </a>
            </div>
        </div>
    );
}
