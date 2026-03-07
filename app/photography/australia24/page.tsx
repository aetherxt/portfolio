import Navbar from '@/components/navbar';
import fs from 'fs';
import path from 'path';
import ImageGallery from '@/components/ImageGallery';
import BackToTop from '@/components/BackToTop';

export default function Australia24() {
    const selectDir = path.join(process.cwd(), 'public', 'photography', 'Australia24');
    const imageFiles = fs.readdirSync(selectDir).filter(file =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    return (
        <div className="flex flex-col h-full bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <div className="px-15 sm:px-30 pt-5 pb-30">
                <div className="flex flex-col justify-start">
                    <a href="/photography" className="text-blue-900 dark:text-blue-100 hover:bg-indigo-100 hover:text-indigo-900 ml-3 w-fit">&lt; back</a>
                    <div className="text-2xl sm:text-3xl font-medium pt-2 sm:pt-5">Australia 2024</div>
                    <div className="flex flex-col pl-5 pt-2 gap-3">
                        <div className="text-stone-800/75 dark:text-stone-200/75">Sunshine Coast | Australia</div>
                        <div className="text-stone-800/75 dark:text-stone-200/75">Fun photos for a high school adventure trip, shot on a old point and shoot.</div>
                    </div>
                </div>
                <ImageGallery images={imageFiles} basePath="/photography/Australia24" />
            </div>
            <BackToTop />
        </div>
    );
}
