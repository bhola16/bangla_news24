import { IHeadlines } from "@/types/Types";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");

  if (!res.ok) {
    throw new Error("Failed to fetch latest headlines");
  }

  const data = await res.json();
  const headlines: IHeadlines[] = data.data ?? [];

  return (
    <div className="bg-red-600">
      <div className="mx-auto flex max-w-7xl overflow-hidden px-5">
        {/* Latest */}
        <div className="z-10 shrink-0 bg-red-700 px-4 py-2 font-bold text-white">
          Latest:
        </div>

        {/* Headlines */}
        <div className="min-w-0 flex-1 overflow-hidden text-white">
          <MarqueeText className="py-2" direction="right" duration={30}>
            {headlines.map((h) => (
              <span key={h.id}>
                <Link
                  href={`/news/${h.id}`}
                  className="transition-colors hover:text-yellow-200"
                >
                  {h.title}
                </Link>

                <span className="mx-5 text-red-200">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
