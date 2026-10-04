import { INavlinks } from "@/types/Types";
import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch navigation categories");
  }

  const data = await res.json();

  const navs: INavlinks[] = data.data ?? [];

  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <nav className="border-t">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3 md:justify-center">
        {/* Home */}
        <Link
          href="/"
          className="shrink-0 font-medium transition-colors hover:text-red-600"
        >
          Home
        </Link>

        {/* Categories */}
        {filteredNavs.map((n) => (
          <Link
            key={n.slug}
            href={`/category/${n.slug}`}
            className="shrink-0 font-medium transition-colors hover:text-red-600"
          >
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navlinks;
