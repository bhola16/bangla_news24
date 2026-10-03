import { INews } from "@/types/Types";
import Image from "next/image";

const NewsCard = ({ news }: { news: INews }) => {
  return (
    <article className="card overflow-hidden bg-base-100 shadow-sm">
      <figure>
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          width={400}
          height={250}
          className="h-[180px] w-full object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <p className="font-semibold text-red-600">{news.category}</p>

        <h2 className="card-title text-lg">{news.title}</h2>

        <p className="line-clamp-3 text-sm text-gray-600">{news.description}</p>
      </div>
    </article>
  );
};

export default NewsCard;
