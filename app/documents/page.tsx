export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-orange-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">公開資訊</h1>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow">
            學生會組織章程
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            會議紀錄
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            財務公開
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            選舉資訊
          </div>
        </div>
      </div>
    </main>
  );
}