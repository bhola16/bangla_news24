import { INewsDetails, INewsDetailsProps } from "@/types/Types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetails = async ({ params }: INewsDetailsProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  // The API may return the article directly or inside `data`
  const news: INewsDetails | null = data?.data ?? data ?? null;

  // News not found
  if (!news) {
    notFound();
  }

  const publishedDate = new Date(news.firstPublished).toLocaleString("bn-BD", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const mainImage = news.body?.find(
    (item) => item.type === "image" && item.url,
  );

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      {/* Source */}
      {news.source && (
        <div className="mb-4">
          <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
            {news.source}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight md:text-5xl">
        {news.title}
      </h1>

      {/* Published Date */}
      {publishedDate && (
        <p className="mt-3 text-sm text-gray-500">{publishedDate}</p>
      )}

      {/* Description */}
      {news.description?.blocks && (
        <div className="mt-5 text-lg leading-8 text-gray-600">
          {news.description.blocks.map((block, index) => (
            <p key={index}>{block.model?.blocks?.[0]?.model?.text ?? ""}</p>
          ))}
        </div>
      )}

      {/* Main Image */}
      {mainImage?.url && (
        <div className="mt-8 overflow-hidden rounded-xl">
          <Image
            src={mainImage.url}
            alt={mainImage.altText || news.title}
            width={mainImage.width || 1200}
            height={mainImage.height || 675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      {/* News Body */}
      <article className="mt-8">
        {news.body?.map((item, index) => {
          // Image
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="my-8">
                <Image
                  src={item.url}
                  alt={item.altText || item.caption || news.title}
                  width={item.width || 1000}
                  height={item.height || 600}
                  className="h-auto w-full rounded-lg object-cover"
                />

                {item.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          // Subheading
          if (item.type === "subheading" && item.text) {
            return (
              <h2
                key={index}
                className="my-8 border-l-4 border-red-600 pl-4 text-2xl font-bold"
              >
                {item.text}
              </h2>
            );
          }

          // Paragraph
          if (item.type === "text" && item.text) {
            return (
              <p
                key={index}
                className="mb-6 whitespace-pre-line text-lg leading-9 text-gray-800"
              >
                {item.text}
              </p>
            );
          }

          return null;
        })}
      </article>

      {/* Tags */}
      {news.tags?.length > 0 && (
        <div className="mt-10 border-t pt-6">
          <h2 className="mb-3 text-lg font-bold">Tags</h2>

          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition hover:bg-red-50 hover:text-red-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Original Source */}
      {news.sourceUrl && (
        <div className="mt-8 border-t pt-6">
          <Link
            href={news.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-600 hover:underline"
          >
            Read original article →
          </Link>
        </div>
      )}
    </main>
  );
};

export default NewsDetails;
