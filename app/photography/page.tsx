import Navbar from '@/components/navbar';
import fs from 'fs';
import path from 'path';
import ImageGallery from '@/components/ImageGallery';
import BackToTop from '@/components/BackToTop';
import ExternalLink from '@/components/ExternalLink';

export default function Photography() {
    const selectDir = path.join(process.cwd(), 'public', 'photography', 'select');
    const imageFiles = fs.readdirSync(selectDir).filter(file =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start gap-2 sm:gap-4">
                    <div className="text-2xl sm:text-3xl font-medium">Photography</div>
                    <div className="text-md">mostly street/travel hobby photography</div>
                    <ExternalLink
                        text="Instagram"
                        hoverText="@mlaw.photo"
                        url="https://instagram.com/mlaw.photo/"
                        className="text-md"
                    />
                    <div className="underline text-md">Gear:</div>
                    <div className="text-md">Camera: Sony A7II</div>
                    <div className="text-md">Lenses: Tamron 28-75mm F/2.8, Sony 50mm F/2.5 G</div>
                </div>
                <div className="flex flex-col pt-8">
                    <div className="text-md pb-2 underline">Collections:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                        <div className="flex flex-col">
                            <div>2026</div>
                            <a href="/photography/awaji26" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">Awaji</a>
                        </div>
                        <div className="flex flex-col">
                            <div>2025</div>
                            <a href="/photography/langkawi25" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">Langkawi</a>
                            <a href="/photography/europe25" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">Europe</a>
                            <a href="/photography/27-5-2025" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">HK 27/05</a>
                        </div>
                        <div className="flex flex-col">
                            <div>2024</div>
                            <a href="/photography/australia24" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">Australia</a>
                            <a href="/photography/12-4-2024" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">HK 12/04</a>
                            <a href="/photography/24-3-2024" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">HK 24/03</a>
                            <a href="/photography/7-2-2024" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">HK 07/02</a>
                        </div>
                        <div className="flex flex-col">
                            <div>2023</div>
                            <a href="/photography/nagoya23" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">Nagoya</a>
                        </div>
                        <div className="flex flex-col">
                            <div>—</div>
                            <a href="/photography/climbers" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">Climbers</a>
                            <a href="/photography/hkmisc" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">HK Misc.</a>
                        </div>
                    </div>
                </div>
                <div className="text-5xl pt-5">—</div>
                <div className="text-xl font-medium">Showcase</div>
                <ImageGallery images={imageFiles} basePath="/photography/select" />
                <BackToTop />
            </div>
        </div>
    );
}