import { INews } from "@/types/Types";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }: { news: INews }) => {
  return (
    <Link href={`/news/${news.id}`} className="group block">
      <article className="card h-full overflow-hidden border border-gray-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
        {/* Image */}
        {news.imageUrl && (
          <figure className="overflow-hidden">
            <Image
              src={news.imageUrl}
              alt={news.imageAlt || news.title}
              width={400}
              height={250}
              className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>
        )}

        {/* Content */}
        <div className="card-body p-4">
          {/* Category */}
          <p className="text-sm font-semibold text-red-600 transition-colors group-hover:text-red-700">
            {news.category}
          </p>

          {/* Title */}
          <h2 className="card-title line-clamp-2 text-lg leading-6 transition-colors group-hover:text-red-600">
            {news.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {news.description}
          </p>

          {/* Read More */}
          <div className="mt-2 flex items-center text-sm font-semibold text-gray-500 transition-colors group-hover:text-red-600">
            <span>Read more</span>

            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
