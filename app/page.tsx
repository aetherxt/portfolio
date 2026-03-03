"use client";

import Navbar from "@/components/navbar";
import AsciiAquarium from "@/components/AsciiAquarium";
import Typewriter from "@/components/Typewriter";
import ExternalLink from "@/components/ExternalLink";
import { useState } from "react";

export default function Home() {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const displayEmail = "axlaw.marcus [at] gmail (dot) com";
  const copiedEmail = "axlaw.marcus@gmail.com";
  const githubUrl = "https://github.com/aetherxt";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(copiedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory snap-always scroll-auto bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="h-[120vh] w-full snap-start shrink-0 relative bg-gradient-to-b from-indigo-200/60 to-stone-50 dark:from-indigo-800/50 dark:to-stone-900">
        <div className="h-screen w-full sticky top-0 flex flex-col items-center justify-center">
          <div className="absolute bottom-[65%] min-[400px]:bottom-[60%]">
            <AsciiAquarium />
          </div>
          <div className="text-6xl font-medium absolute top-1/2 -translate-y-1/2 select-none w-full text-center">
            <span className="hidden min-[400px]:block">
              <Typewriter text="Marcus Law" speed={100} />
            </span>
            <span className="block min-[400px]:hidden">
              <Typewriter text={`Marcus\nLaw`} speed={100} />
            </span>
          </div>
          <div onClick={scrollToContent} className="absolute bottom-20 animate-bounce cursor-pointer">
            <svg
              className="w-10 h-10 text-stone-900 dark:text-stone-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div id="content" className="min-h-screen w-full flex flex-col snap-start shrink-0">
        <Navbar />
        <div className="px-15 sm:px-30 pt-5 sm:pt-2 pb-25">
          <div className="text-3xl sm:text-4xl font-medium pt-4">Marcus Law</div>
          <div className="flex flex-col pl-5 pt-5 sm:pt-8 gap-2">
            <div className="text-md">
              First year undergraduate student studying at the University of
              Hong Kong.
            </div>
            <div className="text-md">I use Python, TypeScript and C++</div>
            <div className="text-md">
              ML Packages - Pytorch, Scikit-learn, OpenCV, Selenium
            </div>
            <div className="text-md">
              Web Stack - NextJS, React/Flask, Tailwind CSS, MongoDB/SQL
            </div>
            <div className="text-md">
              Currently learning bioinformatics and bioconda
            </div>
          </div>
          <div className="flex flex-col pl-5 pt-8 gap-2">
            <div className="text-md">Arts - photography, guitar, violin</div>
            <div className="text-md">Sports - swimming, golf, volleyball</div>
          </div>
          <div className="flex flex-row pl-5 pt-8">
            <div className="text-md pr-3">Me - </div>
            <ExternalLink
              text="Github"
              hoverText="@aetherxt"
              url={githubUrl}
              className="text-md"
            />
            <div className="text-md pr-2">|</div>
            <div
              className="text-md pr-2 cursor-pointer transition-all flex items-center gap-1"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
              onClick={handleCopyEmail}
            >
              {copied ? (
                "Copied!"
              ) : isEmailHovered ? (
                displayEmail
              ) : (
                <>
                  <span className="underline decoration-current/70 underline-offset-4">Email</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col pl-5 pt-8">
            <div className="text-md pb-2 underline">Explore:</div>
            <a
              href="/projects"
              className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit"
            >
              projects
            </a>
            <a
              href="/photography"
              className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit"
            >
              photography
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
