"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import ExternalLink from '@/components/ExternalLink';

type PosterKey = 'asm' | 'agu' | 'ccgl' | null;

const POSTER_IMAGES: Record<Exclude<PosterKey, null>, string> = {
    asm: '/projects/ASM.png',
    agu: '/projects/AGU.png',
    ccgl: '/projects/9070.png',
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
                    <div className="sm:text-md">My programming projects & relevant co-curriculars</div>
                </div>
                <div className="flex flex-col pl-5 pt-10 gap-8 sm:gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 max-w-5xl">
                            <div className="text-base font-medium sm:text-xl">Feburary 2026 - Ongoing</div>
                            <div className="text-md leading-7 sm:text-xl sm:leading-9">
                                &quot;Accommondating Future Talents of Hong Kong&quot;
                            </div>
                            <div className="text-sm text-stone-600 sm:text-base dark:text-current dark:opacity-75">Research on talent housing and acquisition</div>
                        </div>
                        <div className="relative ml-1 flex flex-col gap-8 border-l-2 border-stone-300 pl-3 sm:pl-5 dark:border-stone-700">
                            <div className="relative flex flex-col gap-2">
                                <div className="text-sm text-stone-600 sm:text-lg dark:text-current dark:opacity-65">April 2026</div>
                                <div className="sm:text-xl font-medium">HKU CCGL9070</div>
                                <div className="text-sm sm:text-base">Presentation In-course and Learning Festival</div>
                                <div className="flex flex-col gap-1 pt-1 leading-5 text-stone-600 mb-2 text-sm sm:text-base dark:text-current dark:opacity-75">
                                    <div>Initial research and poster for HKU course CCGL9070</div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setActivePoster('ccgl')}
                                    className="mt-1 w-fit text-sm text-blue-900 hover:bg-indigo-100 hover:text-indigo-900 dark:text-blue-100"
                                >
                                    poster
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2 max-w-5xl">
                            <div className="text-base font-medium sm:text-xl">September 2021 - June 2023</div>
                            <div className="text-md leading-7 sm:text-xl sm:leading-9">
                                &quot;A Search for Polystyrene-Degrading Microbes from Soil Ecosystems in Hong Kong&quot;
                            </div>
                            <div className="text-sm text-stone-600 sm:text-base dark:text-current dark:opacity-75">Microbiology research on polystyrene-degrading microbes</div>
                        </div>
                        <div className="relative ml-1 flex flex-col gap-8 border-l-2 border-stone-300 pl-3 sm:pl-5 dark:border-stone-700">
                            <div className="relative flex flex-col gap-2">
                                <div className="text-sm text-stone-600 sm:text-lg dark:text-current dark:opacity-65">December 2022</div>
                                <div className="sm:text-xl font-medium">AGU 2022</div>
                                <div className="text-sm sm:text-base">American Geophysical Union (AGU) Conference @ Chicago, IL</div>
                                <div className="flex flex-col gap-1 pt-1 leading-5 text-stone-600 mb-2 text-sm sm:text-base dark:text-current dark:opacity-75">
                                    <div>Isolated and sequenced bacteria capable of surviving with toluene as the sole carbon source.</div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setActivePoster('agu')}
                                    className="mt-1 w-fit text-sm text-blue-900 hover:bg-indigo-100 hover:text-indigo-900 dark:text-blue-100"
                                >
                                    poster
                                </button>
                            </div>
                            <div className="relative flex flex-col gap-2">
                                <div className="text-sm text-stone-600 sm:text-lg dark:text-current dark:opacity-65">June 2023</div>
                                <div className="sm:text-xl font-medium">ASM Microbe 2023</div>
                                <div className="text-sm sm:text-base">American Society of Microbiology (ASM) Conference @ Houston, TX</div>
                                <div className="flex flex-col gap-1 pt-1 leading-5 text-stone-600 mb-2 text-sm sm:text-base dark:text-current dark:opacity-75">
                                    <div>Tested growth rate with 0.5% sodium benzoate as sole carbon source</div>
                                    <div>Performed genomic analysis to identify phenyl metabolic pathways.</div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setActivePoster('asm')}
                                    className="mt-1 w-fit text-sm text-blue-900 hover:bg-indigo-100 hover:text-indigo-900 dark:text-blue-100"
                                >
                                    poster
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:text-5xl py-10">—</div>
                <div className="flex flex-col justify-start gap-4 pr-10">
                    <div className="text-xl sm:text-2xl font-medium">Casual Projects</div>
                    <div className="sm:text-md">Projects for fun / everyday use</div>
                </div>
                <div className="flex flex-col pl-5 pr-10 pt-8 sm:pt-10 gap-8 sm:gap-10">
                    <div className="flex flex-col gap-2">
                        <ExternalLink
                            text="dotfiles"
                            url="https://github.com/aetherxt/dotfiles"
                            className="sm:text-xl font-medium hover:text-blue-900 hover:dark:text-blue-200"
                        />
                        <div className="text-md text-stone-600 sm:mb-2 dark:text-current dark:opacity-70">Bash, Quickshell</div>
                        <div className="text-md">Dotfiles for my arch (btw) / hyprland setup</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <ExternalLink
                            text="Last.FM Time Tracker"
                            url="https://github.com/aetherxt/lastfm-time-tracker"
                            className="sm:text-xl font-medium hover:text-blue-900 hover:dark:text-blue-200"
                        />
                        <div className="text-md text-stone-600 sm:mb-2 dark:text-current dark:opacity-70">Flask, Tailwind CSS</div>
                        <div>Songs aren&apos;t (and shouldn&apos;t) all be 3 minutes long. So why are is your music tracked based on # of plays?</div>
                        <div className="text-md">Uses last.fm data to chart your listening based on time</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <ExternalLink
                            text="wallstreetbeggars"
                            url="https://github.com/audreylai/wallstreetbeggars"
                            className="sm:text-xl font-medium hover:text-blue-900 hover:dark:text-blue-200"
                        />
                        <div className="text-md text-stone-600 sm:mb-2 dark:text-current dark:opacity-70">Flask, MongoDB</div>
                        <div className="text-md">Stock analysis dashboard for the Hong Kong stock market with extensively customizable parameters, based on Yahoo Finance data.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">Discord Wordle Scraper</div>
                        <div className="text-md text-stone-600 sm:mb-2 dark:text-current dark:opacity-70">Python, Selenium</div>
                        <div className="text-md">Scrapes past wordle results on discord and shows stats + rankings</div>
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
