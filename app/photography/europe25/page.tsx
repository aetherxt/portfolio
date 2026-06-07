import Navbar from '@/components/navbar';
import fs from 'fs';
import path from 'path';
import ImageGallery from '@/components/ImageGallery';
import BackToTop from '@/components/BackToTop';

export default function Europe25() {
    const europeDir = path.join(process.cwd(), 'public', 'photography', 'Europe25');

    // Define the order of sections here
    const sectionOrder = [
        "Naples",
        "Capri",
        "Rome",
        "Vatican",
        "Pisa",
        "Venice",
        "Paris"
    ];

    // Get all subdirectories within Europe25, read their images, and prepare section data
    const sections = fs.readdirSync(europeDir)
        .filter(file => fs.statSync(path.join(europeDir, file)).isDirectory())
        .map(folder => {
            const folderPath = path.join(europeDir, folder);
            const images = fs.readdirSync(folderPath).filter(file =>
                /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
            );
            return {
                name: folder,
                images: images,
                basePath: `/photography/Europe25/${folder}`
            };
        })
        .sort((a, b) => {
            const indexA = sectionOrder.indexOf(a.name);
            const indexB = sectionOrder.indexOf(b.name);

            // If both are in the list, sort by index
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            // If only a is in the list, it comes first
            if (indexA !== -1) return -1;
            // If only b is in the list, it comes first
            if (indexB !== -1) return 1;
            // If neither are in the list, sort alphabetically
            return a.name.localeCompare(b.name);
        });

    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start gap-2 sm:gap-4 mb-8">
                    <a href="/photography" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">&lt; back</a>
                    <div className="text-2xl sm:text-3xl font-medium">Europe 2025</div>
                </div>
                <div className="flex flex-col gap-10">
                    {sections.map((section) => (
                        <div key={section.name} className="flex flex-col">
                            <div className="text-xl sm:text-2xl font-medium ml-3">{section.name}</div>
                            <ImageGallery images={section.images} basePath={section.basePath} />
                        </div>
                    ))}
                </div>
            </div>
            <BackToTop />
        </div>
    );
}
