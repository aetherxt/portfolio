import Navbar from '@/components/navbar';

export default function Work() {
    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start gap-4">
                    <div className="text-2xl sm:text-3xl font-medium">Work</div>
                    <div className="sm:text-md">My work experience</div>
                </div>

                <div className="flex flex-col pl-5 pt-10 gap-8 sm:gap-10">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 max-w-5xl">
                            <div className="text-base font-medium sm:text-xl">June - August 2026</div>
                            <div className="text-md leading-7 sm:text-xl sm:leading-9">
                                Summer Intern
                            </div>
                            <div className="text-sm text-stone-600 sm:text-base dark:text-current dark:opacity-75">@ Robocode Academy</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm sm:text-base">
                                Designed multiple advanced GenAI courses for High School students.
                            </div>
                            <div className="flex flex-col gap-2 pt-1 leading-5 text-stone-600 mb-2 text-sm sm:text-base dark:text-current dark:opacity-75">
                                <div>Designed classes and student projects, worked as teaching assistant to facilitiate course effectiveness</div>
                                <div>Topics include frontend LLM-integration, webscraping and data science.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 max-w-5xl">
                            <div className="text-base font-medium sm:text-xl">May - June 2026</div>
                            <div className="text-md leading-7 sm:text-xl sm:leading-9">
                                Legal Intern
                            </div>
                            <div className="text-sm text-stone-600 sm:text-base dark:text-current dark:opacity-75">@ T.K. Tsui & Co.</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm sm:text-base">
                                Assisted with an arbritration case at the HKIAC.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 max-w-5xl">
                            <div className="text-base font-medium sm:text-xl">August 2025</div>
                            <div className="text-md leading-7 sm:text-xl sm:leading-9">
                                Teaching Assistant
                            </div>
                            <div className="text-sm text-stone-600 sm:text-base dark:text-current dark:opacity-75">@ Robocode Academy</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm sm:text-base">
                                Taught a 1 week beginner level workshop on GenAI.
                            </div>
                            <div className="flex flex-col gap-2 pt-1 leading-5 text-stone-600 mb-2 text-xs sm:text-sm dark:text-current dark:opacity-75">
                                <div>Topics include prompt engineering, text-to-image and text-to-video.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
