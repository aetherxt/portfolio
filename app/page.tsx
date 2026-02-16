'use client';

import Navbar from '@/components/navbar';
import { useState } from 'react';

export default function Home() {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const displayEmail = 'axlaw.marcus [at] gmail (dot) com';
  const copiedEmail = 'axlaw.marcus@gmail.com';
  const displayGithub = '@aetherxt';
  const githubUrl = 'https://github.com/aetherxt';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(copiedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div>
      <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <div className="pl-15 sm:pl-30 pt-10">
          <div className="flex flex-col justify-start gap-4">
            <div className="text-4xl sm:text-6xl font-medium">Marcus Law</div>
          </div>
          <div className="flex flex-col pl-5 pr-20 pt-10 gap-2">
            <div className="text-md">First year undergraduate student studying at the University of Hong Kong.</div>
            <div className="text-md">I use Python, TypeScript and C++</div>
            <div className="text-md">ML Packages - Pytorch, Scikit-learn, OpenCV</div>
            <div className="text-md">Web Stack - NextJS, React/Flask, Tailwind CSS, MongoDB/Firebase</div>
            <div className="text-md">Currently learning bioinformatics and bioconda</div>
          </div>
          <div className="flex flex-col pl-5 pr-20 pt-8 gap-2">
            <div className="text-md">Arts - photography, guitar, violin</div>
            <div className="text-md">Sports - swimming, golf, volleyball</div>
          </div>
          <div className="flex flex-row pl-5 pt-8">
            <div className="text-md pr-3">Me - </div>
            <div
              className="text-md pr-2 cursor-pointer transition-all"
              onMouseEnter={() => setIsGithubHovered(true)}
              onMouseLeave={() => setIsGithubHovered(false)}
              onClick={() => window.open(githubUrl, '_blank')}
            >
              {isGithubHovered ? displayGithub : 'Github'}
            </div>
            <div className="text-md pr-2">|</div>
            <div
              className="text-md pr-2 cursor-pointer transition-all"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
              onClick={handleCopyEmail}
            >
              {copied ? 'Copied!' : (isEmailHovered ? displayEmail : 'Email')}
            </div>
          </div>
          <div className="flex flex-col pl-5 pt-8 pb-30">
            <div className="text-md pb-2 underline">Explore:</div>
            <a href="/projects" className="dark:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">projects</a>
            <a href="/photography" className="dark:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">photography</a>
          </div>
        </div>
      </div>
    </div>
  );
}
