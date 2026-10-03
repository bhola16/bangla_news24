import { IHeadlines } from "@/types/Types";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: IHeadlines[] = data.data;
  //   console.log(headlines)

  return (
    <div className="bg-red-600">
      <div className="mx-auto flex max-w-7xl overflow-hidden px-5">
        {/* Latest */}
        <div className="shrink-0 bg-red-700 px-4 py-1 font-bold text-white">
          Latest:
        </div>

        {/* Headlines */}
        <div className="min-w-0 flex-1">
          <MarqueeText className="py-1" direction="right" duration={50}>
            {headlines.map((h) => (
              <span key={h.id}>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
