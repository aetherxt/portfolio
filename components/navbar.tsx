"use client";

export default function Navbar() {
    return (
        <div className="flex max-h-1/10 max-w-screen place-self-start mb-15 sticky top-0 z-10">
            <div className="flex flex-col sm:flex-row sm:items-center mt-10 mx-10 sm:mx-25 select-none gap-3 sm:gap-5">
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
