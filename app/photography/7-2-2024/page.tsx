import Navbar from '@/components/navbar';
import fs from 'fs';
import path from 'path';
import ImageGallery from '@/components/ImageGallery';
import BackToTop from '@/components/BackToTop';

export default function Feb72024() {
    const selectDir = path.join(process.cwd(), 'public', 'photography', '7-2-2024');
    const imageFiles = fs.readdirSync(selectDir).filter(file =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start">
                    <a href="/photography" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">&lt; back</a>
                    <div className="text-2xl sm:text-3xl font-medium pt-2 sm:pt-5">February 7, 2024</div>
                    <div className="flex flex-row items-center pl-5 pt-2">
                        <span className="text-stone-800/75 dark:text-stone-200/75">Fa Hui Park CNY Market | Hong Kong</span>
                    </div>
                </div>
                <ImageGallery images={imageFiles} basePath="/photography/7-2-2024" />
            </div>
            <BackToTop />
        </div>
    );
}
