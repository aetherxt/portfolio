import Navbar from '@/components/navbar';

export default function Projects() {
    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start gap-4">
                    <div className="sm:text-4xl font-medium">Projects</div>
                    <div className="sm:text-md">An overview of my programming projects & relevant co-curriculars</div>
                </div>
                <div className="flex flex-col pl-5 pr-20 pt-10 gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">ASM Microbe 2023</div>
                        <div className="text-md">American Society of Microbiology (ASM) Conference @ Houston, TX</div>
                        <div className="text-md">Presented next steps in research on toluene degrading microbes</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">AGU 2022</div>
                        <div className="text-md">American Geophysical Union (AGU) Conference @ Chicago, IL</div>
                        <div className="text-md">Presented initial research on toluene degrading microbes</div>
                    </div>
                </div>
                <div className="sm:text-5xl py-10">—</div>
                <div className="flex flex-col justify-start gap-4">
                    <div className="sm:text-2xl font-medium">Casual Projects</div>
                    <div className="sm:text-md">Slightly useful projects for fun / everyday use</div>
                </div>
                <div className="flex flex-col pl-5 pr-20 pt-10 gap-10">
                    <div className="flex flex-col gap-2">
                        <a href="https://github.com/aetherxt/dotfiles" target="_blank" rel="noopener noreferrer" className="sm:text-xl font-medium dark:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-900 w-fit">dotfiles</a>
                        <div className="text-md">Dotfiles for my arch (btw) / hyprland setup</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">Music Time Tracker</div>
                        <div className="text-md">Uses your last.fm data to chart using listening time instead of plays</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="sm:text-xl font-medium">Discord Wordle Scraper</div>
                        <div className="text-md">Scrapes Discord wordle results and shows stats + rankings</div>
                    </div>
                </div>
            </div>
        </div>
    );
}