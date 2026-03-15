import Link from "next/link";

const announcements = [
  {
    date: "2026-03-16",
    title: "學生會官方網站正式上線",
    desc: "網站將陸續更新學生會公告、活動資訊、學生權益與公開文件。",
  },
  {
    date: "2026-03-12",
    title: "學生意見反映表單開放中",
    desc: "如有校園建議、學生福利或權益問題，歡迎透過學生會窗口反映。",
  },
  {
    date: "2026-03-08",
    title: "本學期活動規劃公告",
    desc: "學生會將陸續辦理交流活動、座談與學生自治推廣活動。",
  },
];

const services = [
  {
    title: "學生權益",
    desc: "受理學生建議、校園問題與權益案件反映。",
    href: "/rights",
  },
  {
    title: "最新公告",
    desc: "掌握近期消息、重要時程與學生會通知。",
    href: "/news",
  },
  {
    title: "公開資訊",
    desc: "查看章程、會議紀錄、財務與選舉資訊。",
    href: "/documents",
  },
  {
    title: "活動專區",
    desc: "活動公告、報名資訊與成果紀錄。",
    href: "/events",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <section className="border-b border-emerald-100 bg-[linear-gradient(135deg,#fff_0%,#fff7ed_45%,#ecfdf5_100%)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              康寧大學學生會｜官方網站
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
              讓學生的聲音，
              <br />
              成為改變校園的力量
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              康寧大學學生會為本校學生自治組織，致力於維護學生權益、
              促進校園參與、推動學生自治、辦理校園活動，
              並作為學生與校方之間的重要溝通橋梁。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/news"
                className="rounded-2xl bg-emerald-700 px-6 py-3 text-white shadow hover:bg-emerald-800"
              >
                查看最新公告
              </Link>

              <Link
                href="/rights"
                className="rounded-2xl border border-emerald-700 px-6 py-3 hover:bg-white"
              >
                學生權益反映
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <p className="text-sm text-emerald-700">核心任務</p>
              <h2 className="mt-2 text-2xl font-bold">
                學生自治 × 權益推動 × 會務公開
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                建立學生發聲平台，推進校園改善提案，並透過網站公開重要資訊。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow">
                <p className="text-3xl font-black text-emerald-700">學生自治</p>
                <p className="mt-2 text-slate-600">代表學生、連結校園、促進參與</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow">
                <p className="text-3xl font-black text-emerald-700">公開透明</p>
                <p className="mt-2 text-slate-600">章程、紀錄、財務資訊整合公開</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-700">Service</p>
            <h2 className="mt-2 text-3xl font-bold">學生會服務入口</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              <p className="mt-5 text-sm font-semibold text-emerald-700">
                前往查看 →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-700">News</p>
              <h2 className="mt-2 text-3xl font-bold">最新公告</h2>
            </div>

            <Link href="/news" className="text-sm font-semibold text-emerald-700">
              查看全部 →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {announcements.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 p-6 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">{item.date}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-emerald-700 p-8 text-white shadow-lg">
            <p className="text-sm font-semibold text-emerald-100">Student Rights</p>
            <h2 className="mt-2 text-3xl font-bold">學生權益專區</h2>
            <p className="mt-4 leading-8 text-emerald-50">
              若有校園環境、教學、行政流程或學生福利相關問題，
              可透過學生會協助反映與追蹤。
            </p>
            <Link
              href="/rights"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-700"
            >
              前往權益頁面
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <p className="text-sm font-semibold text-emerald-700">Public Information</p>
            <h2 className="mt-2 text-3xl font-bold">公開資訊</h2>
            <ul className="mt-4 space-y-3 leading-7 text-slate-600">
              <li>學生會組織章程</li>
              <li>會議紀錄</li>
              <li>財務公開</li>
              <li>選舉資訊</li>
            </ul>
            <Link
              href="/documents"
              className="mt-6 inline-block rounded-2xl border border-emerald-700 px-5 py-3 font-semibold"
            >
              查看公開文件
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold text-emerald-700">Contact</p>
            <h2 className="mt-2 text-3xl font-bold">聯絡我們</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-orange-50 p-6">
              <h3 className="text-lg font-bold">Email</h3>
              <p className="mt-3 text-slate-600">sa@ukn.edu.tw</p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-6">
              <h3 className="text-lg font-bold">電話</h3>
              <p className="mt-3 text-slate-600">(02) 2632-1181</p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-6">
              <h3 className="text-lg font-bold">地點</h3>
              <p className="mt-3 text-slate-600">康寧大學學生會辦公室</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}