import { INews } from "@/types/Types";
import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }: { news: INews[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) {
    return <p>No news available.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Main News */}
      <Link
        href={`/news/${firstNews.id}`}
        className="group block"
      >
        <article className="card h-full overflow-hidden bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          {/* Image */}
          {firstNews.imageUrl && (
            <figure className="overflow-hidden">
              <Image
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt || firstNews.title}
                width={600}
                height={400}
                className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          )}

          {/* Content */}
          <div className="card-body">
            {/* Category */}
            <p className="font-semibold text-red-600 transition-colors duration-300 group-hover:text-red-700">
              {firstNews.category}
            </p>

            {/* Title */}
            <h2 className="card-title transition-colors duration-300 group-hover:text-red-600">
              {firstNews.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600">
              {firstNews.description}
            </p>

            {/* ID */}
            <p className="mt-2 text-xs text-gray-400">
              ID: {firstNews.id}
            </p>

            {/* Read More */}
            <div className="mt-2 flex items-center text-sm font-semibold text-gray-500 transition-colors duration-300 group-hover:text-red-600">
              <span>Read more</span>

              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </article>
      </Link>

      {/* Other Main News */}
      <div className="grid gap-3">
        {otherNews.slice(0, 4).map((news) => (
          <Link
            key={news.id}
            href={`/news/${news.id}`}
            className="group block"
          >
            <article className="h-full rounded-lg border border-gray-300 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-red-50/30 hover:shadow-md">
              {/* Category */}
              <p className="text-sm font-semibold text-red-600 transition-colors duration-300 group-hover:text-red-700">
                {news.category}
              </p>

              {/* Title */}
              <h3 className="mt-1 font-semibold leading-6 transition-colors duration-300 group-hover:text-red-600">
                {news.title}
              </h3>

              {/* Read More */}
              <div className="mt-2 flex items-center text-sm text-gray-500 transition-all duration-300 group-hover:text-red-600">
                <span>Read more</span>

                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;