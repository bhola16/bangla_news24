import NewsCard from "@/components/NewsCard";
import { ICategoryNewsProps, INews } from "@/types/Types";

const CategoryNews = async ({ params }: ICategoryNewsProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data = await res.json();

  const categoryNews: INews[] = data.data ?? [];

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      {/* Category Title */}
      <h1 className="mb-5 border-b-2 border-red-700 pb-2 text-2xl font-bold">
        {data.title}
      </h1>

      {/* News */}
      {categoryNews.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No news available in this category.</p>
      )}
    </main>
  );
};

export default CategoryNews;
