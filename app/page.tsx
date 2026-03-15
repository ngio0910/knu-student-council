export default function Home() {
  const announcements = [
    {
      title: "學生會官方網站正式上線",
      date: "2026-03-16",
      desc: "網站將陸續更新最新公告、學生權益資訊、活動報名與公開文件。",
    },
    {
      title: "學生權益反映表單開放中",
      date: "2026-03-12",
      desc: "如有校園建議、權益問題或學生福利相關意見，歡迎透過學生會窗口反映。",
    },
    {
      title: "本學期活動規劃公告",
      date: "2026-03-08",
      desc: "學生會將辦理交流活動、校園企劃與學生自治推廣活動，請持續關注最新消息。",
    },
  ];

  const departments = [
    {
      name: "會長／副會長",
      desc: "統籌學生會會務方向，代表學生會對外聯繫與溝通。",
    },
    {
      name: "行政部",
      desc: "負責文書、會議安排、行政協調與內部事務處理。",
    },
    {
      name: "活動部",
      desc: "規劃校園活動、學生交流企劃與各項大型活動執行。",
    },
    {
      name: "公關宣傳部",
      desc: "負責社群經營、視覺設計、文案與網站內容更新。",
    },
    {
      name: "學生權益部",
      desc: "蒐集學生意見、追蹤權益案件並作為溝通窗口。",
    },
    {
      name: "財務部",
      desc: "管理預算、核銷流程與財務公開資料整理。",
    },
  ];

  const documents = [
    "學生會組織章程",
    "會議紀錄",
    "財務公開",
    "選舉資訊",
  ];

  const officers = [
    { role: "學生會會長", name: "待補" },
    { role: "學生會副會長", name: "待補" },
    { role: "秘書長", name: "待補" },
    { role: "學生權益部部長", name: "待補" },
  ];

  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold text-emerald-700">Official Website</p>
            <h1 className="text-lg font-bold">康寧大學學生會</h1>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-emerald-700">關於我們</a>
            <a href="#announcements" className="hover:text-emerald-700">最新公告</a>
            <a href="#rights" className="hover:text-emerald-700">學生權益</a>
            <a href="#officers" className="hover:text-emerald-700">幹部介紹</a>
            <a href="#documents" className="hover:text-emerald-700">公開資訊</a>
            <a href="#contact" className="hover:text-emerald-700">聯絡我們</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold text-emerald-700">
          康寧大學學生會｜官方網站
        </p>

        <h2 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
          讓學生的聲音，
          <br />
          成為改變校園的力量
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          康寧大學學生會為本校學生自治組織，致力於維護學生權益、
          促進校園參與、推動學生自治、辦理校園活動，
          並作為學生與校方之間的重要溝通橋梁。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#announcements"
            className="rounded-xl bg-emerald-700 px-6 py-3 text-white"
          >
            查看最新公告
          </a>
          <a
            href="#rights"
            className="rounded-xl border border-emerald-700 px-6 py-3"
          >
            學生權益反映
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">關於學生會</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">學生自治</h4>
            <p className="mt-3 text-slate-600 leading-7">
              代表學生發聲，建立開放透明的校園公共參與機制。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">權益推動</h4>
            <p className="mt-3 text-slate-600 leading-7">
              協助蒐集學生意見，追蹤校園問題與改善進度。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">會務公開</h4>
            <p className="mt-3 text-slate-600 leading-7">
              透過網站公開章程、會議紀錄與財務資訊，提升透明度。
            </p>
          </div>
        </div>
      </section>

      <section id="announcements" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">最新公告</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {announcements.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow">
              <p className="text-sm font-semibold text-emerald-700">{item.date}</p>
              <h4 className="mt-2 text-xl font-semibold">{item.title}</h4>
              <p className="mt-3 text-slate-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rights" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">學生權益</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">意見反映與案件受理</h4>
            <p className="mt-3 text-slate-600 leading-7">
              若有教學、校園環境、行政流程、學生福利或其他權益相關事項，
              可透過學生會表單、社群或 Email 與我們聯繫。
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-xl bg-emerald-700 px-5 py-3 text-white"
            >
              前往權益表單
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">常見問題</h4>
            <ul className="mt-3 space-y-3 text-slate-600 leading-7">
              <li>• 可以匿名反映問題嗎？可以依需求設計匿名表單。</li>
              <li>• 多久會回覆？建議 3 至 7 個工作天內先回覆收件狀況。</li>
              <li>• 學生會可協助什麼？蒐集、整理、轉介與追蹤校園權益案件。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="officers" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">幹部介紹</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {officers.map((item) => (
            <div key={item.role} className="rounded-2xl bg-white p-6 text-center shadow">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
                {item.name === "待補" ? "?" : item.name.slice(0, 1)}
              </div>
              <h4 className="mt-4 text-lg font-semibold">{item.role}</h4>
              <p className="mt-2 text-slate-600">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">組織架構</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {departments.map((item) => (
            <div key={item.name} className="rounded-2xl bg-white p-6 shadow">
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p className="mt-3 text-slate-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="documents" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">公開資訊</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {documents.map((doc) => (
            <div key={doc} className="rounded-2xl bg-white p-6 shadow">
              <h4 className="text-xl font-semibold">{doc}</h4>
              <p className="mt-3 text-slate-600">
                可放置 Google Drive、PDF 或文件連結。
              </p>
              <a href="#" className="mt-4 inline-block text-emerald-700">
                查看連結 →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">活動專區</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">近期活動</h4>
            <p className="mt-3 text-slate-600 leading-7">
              公告活動時間、地點、內容與報名方式。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">活動報名</h4>
            <p className="mt-3 text-slate-600 leading-7">
              可串接 Google 表單作為學生報名入口。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h4 className="text-xl font-semibold">活動成果</h4>
            <p className="mt-3 text-slate-600 leading-7">
              可加入活動照片、影片連結與活動回顧內容。
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">聯絡我們</h3>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow">
          <p>Email：sa@ukn.edu.tw</p>
          <p className="mt-2">電話：(02) 2632-1181</p>
          <p className="mt-2">地點：康寧大學學生會辦公室</p>
          <p className="mt-2">Instagram：請填入學生會 IG</p>
          <p className="mt-2">Facebook：請填入學生會 FB</p>
        </div>
      </section>
    </main>
  );
}