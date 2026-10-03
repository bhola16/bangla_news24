import { INews } from "@/types/Types";
import Image from "next/image";



const MainNews = ({ news }: { news: INews[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) {
    return <p>No news available.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Main News */}
      <article className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            width={600}
            height={400}
            className="h-[300px] w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <p className="font-semibold text-red-600">{firstNews.category}</p>

          <h2 className="card-title">{firstNews.title}</h2>

          <p>{firstNews.description}</p>
        </div>
      </article>

      {/* Other Main News */}
      <div className="grid gap-3">
        {otherNews.slice(0, 4).map((news) => (
          <article
            key={news.id}
            className="rounded-lg border border-gray-300 bg-base-100 p-4 shadow-sm"
          >
            <p className="font-semibold text-red-600">{news.category}</p>

            <h3 className="mt-1 font-semibold">{news.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
