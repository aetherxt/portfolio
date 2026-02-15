"use client";

export default function Navbar() {
    return (
        <div className="flex w-full place-self-start sticky top-0 z-10 bg-gradient-to-b from-stone-50/95 via-stone-50/60 to-stone-50/0 dark:from-stone-900/95 dark:via-stone-900/60 dark:to-stone-900/0 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center my-5 sm:my-15 mx-10 sm:mx-20 select-none gap-3 sm:gap-5">
                <a
                    href="#"
                    className="text-lg hover:bg-indigo-100 hover:text-indigo-900 mr-8"
                >
                    home
                </a>
                <a
                    href="#"
                    className="text-lg hover:bg-indigo-100 hover:text-indigo-900 mr-8"
                >
                    projects
                </a>
                <a
                    href="#"
                    className="text-lg hover:bg-indigo-100 hover:text-indigo-900"
                >
                    photography
                </a>
            </div>
        </div>
    );
}
