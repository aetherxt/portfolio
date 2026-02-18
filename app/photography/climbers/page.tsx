import Navbar from '@/components/navbar';
import fs from 'fs';
import path from 'path';
import ImageGallery from '@/components/ImageGallery';
import BackToTop from '@/components/BackToTop';

export default function Climbers() {
    const selectDir = path.join(process.cwd(), 'public', 'photography', 'Climbers');
    const imageFiles = fs.readdirSync(selectDir).filter(file =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start gap-2 sm:gap-4">
                    <a href="/photography" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">&lt; back</a>
                    <div className="text-2xl sm:text-3xl font-medium">Climbers</div>
                </div>
                <ImageGallery images={imageFiles} basePath="/photography/Climbers" />
            </div>
            <BackToTop />
        </div>
    );
}
