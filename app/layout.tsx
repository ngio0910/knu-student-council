import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold text-emerald-700">
          康寧大學學生會｜官方網站
        </p>

        <h2 className="mt-4 text-5xl font-bold md:text-6xl">
          讓學生的聲音，成為改變校園的力量
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          康寧大學學生會為本校學生自治組織，致力於維護學生權益、
          促進校園參與、推動學生自治、辦理校園活動，
          並作為學生與校方之間的重要溝通橋梁。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/news"
            className="rounded-xl bg-emerald-700 px-6 py-3 text-white"
          >
            查看最新公告
          </Link>

          <Link
            href="/rights"
            className="rounded-xl border border-emerald-700 px-6 py-3"
          >
            學生權益反映
          </Link>
        </div>
      </section>
    </main>
  );
}