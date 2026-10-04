import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
import type { IOtherSection } from "@/types/Types";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  if (!res.ok) {
    throw new Error("Failed to fetch news sections");
  }

  const data = await res.json();

  const sections: IOtherSection[] = data.data ?? [];

  const mainNews = sections[0]?.articles ?? [];
  const otherSections = sections.slice(1);

  return (
    <main>
      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-10 md:grid-cols-3">
        {/* News Section */}
        <div className="col-span-1 md:col-span-2">
          {/* Main News */}
          <MainNews news={mainNews} />

          {/* Other Sections */}
          <div className="mt-8 grid gap-8">
            {otherSections.map((section) => (
              <section key={section.curationId}>
                {/* Section Title */}
                <h2 className="border-b-2 border-red-600 pb-1 font-bold">
                  {section.title}
                </h2>

                {/* News Cards */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <aside className="col-span-1">
          <MostRead></MostRead>
        </aside>
      </div>
    </main>
  );
}
