import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white">Bangla News 24</h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Bangla News 24 is a news platform that brings you the latest news,
              stories, and updates from Bangladesh and around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/" className="transition-colors hover:text-red-500">
                Home
              </Link>

              <Link
                href="/category/national"
                className="transition-colors hover:text-red-500"
              >
                National
              </Link>

              <Link
                href="/category/international"
                className="transition-colors hover:text-red-500"
              >
                International
              </Link>

              <Link
                href="/category/sports"
                className="transition-colors hover:text-red-500"
              >
                Sports
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Stay Updated</h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Follow Bangla News 24 for the latest news and important updates.
            </p>

            <div className="mt-4 flex gap-3">
              <Link
                href="#"
                className="rounded-md border border-gray-700 px-4 py-2 text-sm transition hover:border-red-500 hover:text-red-500"
              >
                Facebook
              </Link>

              <Link
                href="#"
                className="rounded-md border border-gray-700 px-4 py-2 text-sm transition hover:border-red-500 hover:text-red-500"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Bangla News 24. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
