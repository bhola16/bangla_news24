import type { IMostRead } from "@/types/Types";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  if (!res.ok) {
    throw new Error("Failed to fetch most read news");
  }

  const data = await res.json();
  const news: IMostRead[] = data.data ?? [];

  return (
    <aside className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b-2 border-red-600 px-5 py-3">
        <h2 className="text-xl font-bold">Most Read News</h2>
      </div>

      {/* News List */}
      <div className="divide-y divide-gray-200">
        {news.map((n, i) => (
          <article
            key={n.id}
            className="group flex gap-4 px-5 py-4 transition hover:bg-gray-50"
          >
            {/* Number */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50">
              <span className="text-lg font-bold text-red-600">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold leading-6 text-gray-800 transition group-hover:text-red-600">
              {n.title}
            </h3>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default MostRead;
