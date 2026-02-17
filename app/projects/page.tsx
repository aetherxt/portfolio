"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';

type PosterKey = 'asm' | 'agu' | null;

const POSTER_IMAGES: Record<Exclude<PosterKey, null>, string> = {
    asm: '/projects/ASM.png',
    agu: '/projects/AGU.png',
};

export default function Projects() {
    const [activePoster, setActivePoster] = useState<PosterKey>(null);

    const closePoster = () => setActivePoster(null);
    const activePosterUrl = activePoster ? POSTER_IMAGES[activePoster] : null;

    useEffect(() => {
        if (!activePoster) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePoster();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activePoster]);

    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className={`px-15 sm:px-30 pt-5 pb-30 ${activePoster ? 'blur-sm' : ''}`}>
                <div className="flex flex-col justify-start gap-4">
                    <div className="text-2xl sm:text-3xl font-medium">Projects</div>
                    <div className="sm:text-md">An overview of my programming projects & relevant co-curriculars</div>
                </div>
                <div className="flex flex-col pl-5 pr-20 pt-10 gap-8 sm:gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">ASM Microbe 2023</div>
                        <div>American Society of Microbiology (ASM) Conference @ Houston, TX</div>
                        <div>Presented next steps in research on toluene degrading microbes</div>
                        <button
                            type="button"
                            onClick={() => setActivePoster('asm')}
                            className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 w-fit"
                        >
                            poster
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">AGU 2022</div>
                        <div>American Geophysical Union (AGU) Conference @ Chicago, IL</div>
                        <div>Presented initial research on toluene degrading microbes</div>
                        <button
                            type="button"
                            onClick={() => setActivePoster('agu')}
                            className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 w-fit"
                        >
                            poster
                        </button>
                    </div>
                </div>
                <div className="sm:text-5xl py-10">—</div>
                <div className="flex flex-col justify-start gap-4">
                    <div className="text-xl sm:text-2xl font-medium">Casual Projects</div>
                    <div className="sm:text-md">Slightly useful projects for fun / everyday use</div>
                </div>
                <div className="flex flex-col pl-5 pr-20 pt-10 gap-8 sm:gap-10">
                    <div className="flex flex-col gap-2">
                        <a href="https://github.com/aetherxt/dotfiles" target="_blank" rel="noopener noreferrer" className="sm:text-xl font-medium text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 w-fit">dotfiles</a>
                        <div className="text-md opacity-70 mb-2">Bash, Quickshell</div>
                        <div className="text-md">Dotfiles for my arch (btw) / hyprland setup</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="https://github.com/aetherxt/lastfm-time-tracker" target="_blank" rel="noopener noreferrer" className="sm:text-xl font-medium text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 w-fit">Last.FM Time Tracker</a>
                        <div className="text-md opacity-70 mb-2">Flask, Tailwind CSS</div>
                        <div className="text-md">Uses last.fm data to chart using listening time instead of plays</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">Discord Wordle Scraper</div>
                        <div className="text-md">Scrapes Discord wordle results and shows stats + rankings</div>
                    </div>
                </div>
            </div>

            {activePosterUrl ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    role="dialog"
                    aria-modal="true"
                    onClick={closePoster}
                >
                    <div
                        className="relative w-[80vw] h-[80vh] bg-white p-4 shadow-xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closePoster}
                            aria-label="Close poster"
                            className="absolute right-4 top-2 text-2xl leading-none text-stone-700 hover:text-stone-900 dark:text-stone-200 dark:hover:text-white"
                        >
                            ×
                        </button>
                        <div className="h-full w-full overflow-hidden bg-white">
                            <img
                                src={activePosterUrl}
                                alt="Poster"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}