"use client";

import { useState } from "react";

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isPhotographyOpen, setIsPhotographyOpen] = useState(true);
  return (
    <div className="flex max-w-1/4 min-h-screen justify-center place-self-start border-r-2 border-slate-300">
      <div className="flex flex-col mt-10 ml-8 select-none pr-7">
        <a href="#" className="text-5xl font-bold mb-10 underline-animation">
          MLAW
        </a>
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <a className="text-2xl font-bold underline-animation select-none">
              Projects
            </a>
            <span
              className={`text-xl font-bold transition-transform duration-300 cursor-pointer mt-1 ${
                isProjectsOpen ? "rotate-90" : ""
              }`}
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            >
              ᐅ
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isProjectsOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="ml-4 mt-2 flex flex-col gap-2 text-lg">
              <a
                href="#"
                className="hover:bg-indigo-100 hover:text-indigo-900 pl-1"
              >
                Project 1
              </a>
              <a
                href="#"
                className="hover:bg-indigo-100 hover:text-indigo-900 pl-1"
              >
                Project 2
              </a>
              <a
                href="#"
                className="hover:bg-indigo-100 hover:text-indigo-900 pl-1"
              >
                Project 3
              </a>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <a className="text-2xl font-bold underline-animation select-none">
              Photography
            </a>
            <span
              className={`text-xl font-bold transition-transform duration-300 mt-1 ${
                isPhotographyOpen ? "rotate-90" : ""
              }`}
              onClick={() => setIsPhotographyOpen(!isPhotographyOpen)}
            >
              ᐅ
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isPhotographyOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="ml-4 mt-2 flex flex-col gap-2 text-lg">
              <a
                href="#"
                className="hover:bg-indigo-100 hover:text-indigo-900 pl-1"
              >
                Album 1
              </a>
              <a
                href="#"
                className="hover:bg-indigo-100 hover:text-indigo-900 pl-1"
              >
                Album 2
              </a>
              <a
                href="#"
                className="hover:bg-indigo-100 hover:text-indigo-900 pl-1"
              >
                Album 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
