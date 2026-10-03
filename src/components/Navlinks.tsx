import { INavlinks } from "@/types/Types";
import Link from "next/link";



const Navlinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const navs: INavlinks[] = data.data;

  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <nav className="border-t">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-3">
        <Link href="/">Home</Link>

        {filteredNavs.map((n) => (
          <Link key={n.slug} href={`/${n.slug}`}>
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navlinks;