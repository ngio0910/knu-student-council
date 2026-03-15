export default function NewsPage() {
  return (
    <main className="min-h-screen bg-orange-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">最新公告</h1>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">學生會官方網站正式上線</h2>
            <p className="mt-3 text-slate-600">
              網站將陸續更新學生會公告、活動資訊與公開文件。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">學生意見反映表單開放中</h2>
            <p className="mt-3 text-slate-600">
              如有校園建議與權益問題，歡迎透過學生會窗口反映。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}