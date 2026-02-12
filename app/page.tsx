import Navbar from '@/components/navbar';

export const metadata = {
  title: 'MLAW',
};

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen bg-slate-50 font-mono dark:bg-slate-900">
        <Navbar />
        <div className="flex flex-col justify-start gap-4 pl-15 pt-20">
          <div className="text-6xl font-bold">Marcus Law</div>
          <div className="text-2xl opacity-70 ml-5">BEng(Compsci) @ HKU</div>
        </div>
      </div>
    </div>
  );
}
