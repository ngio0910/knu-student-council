export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">

      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="text-sm font-semibold text-emerald-700">
          康寧大學學生會｜官方網站
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          康寧大學學生會
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          康寧大學學生會為本校學生自治組織，
          致力於維護學生權益、促進校園參與、
          舉辦學生活動，並作為學生與校方之間的重要溝通橋梁。
        </p>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold">
          最新公告
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              學生會網站建置中
            </h3>
            <p className="mt-3 text-slate-600">
              未來將在此發布學生會公告與活動資訊。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              學生權益反映
            </h3>
            <p className="mt-3 text-slate-600">
              若有校園建議或權益問題可向學生會反映。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              學生活動
            </h3>
            <p className="mt-3 text-slate-600">
              學生會將舉辦各類校園交流與活動。
            </p>
          </div>

        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold">
          聯絡我們
        </h2>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow">
          <p>Email：sa@ukn.edu.tw</p>
          <p className="mt-2">電話：(02)2632-1181</p>
          <p className="mt-2">康寧大學學生會辦公室</p>
        </div>

      </section>

    </main>
  );
}