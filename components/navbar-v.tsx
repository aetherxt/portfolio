"use client";

export default function Navbar() {
  return (
    <div className="flex max-w-1/4 min-h-screen justify-center place-self-start border-r-2 border-slate-900/30 dark:border-slate-100/40 ">
      <div className="flex flex-col mt-10 ml-8 select-none pr-7">
        <a href="#" className="text-3xl font-bold">
          MARCUS
        </a>
        <a href="#" className="text-3xl font-bold mb-10">
          LAW
        </a>
        <div className="mb-5 group">
          <div className="flex items-center gap-2 mb-2">
            <a className="text-xl underline-animation select-none">
              Projects
            </a>
          </div>
          <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
            <div className="ml-4 mt-2 flex flex-col gap-2 text-md">
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
        <div className="mb-5 group">
          <div className="flex items-center gap-2 mb-2">
            <a className="text-xl underline-animation select-none">
              Photography
            </a>
          </div>
          <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
            <div className="ml-4 mt-2 flex flex-col gap-2 text-md">
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
