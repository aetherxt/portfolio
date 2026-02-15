import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-stone-50 font-[Geist_Mono] dark:bg-stone-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <div className="flex flex-col justify-start gap-4 px-15">
          <div className="text-4xl sm:text-6xl font-medium">Marcus Law</div>
          <div className="text-lg sm:text-2xl text-slate-500 dark:text-slate-400 ml-5">BEng(Compsci) @ HKU</div>
        </div>
        <div className="flex flex-col px-10 py-50">
          <div className="text-9xl pt-50">test</div>
          <div className="text-9xl pt-50">test</div>
          <div className="text-9xl pt-50">test</div>
        </div>
      </div>
    </div>
  );
}
