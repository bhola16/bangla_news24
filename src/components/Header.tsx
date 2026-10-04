import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b bg-white shadow-sm">
      {/* Top Header */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
        {/* Logo + Title */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg px-2 py-1 transition-all duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo.webp"
            alt="Bangla News 24 logo"
            width={60}
            height={60}
            priority
            className="h-[60px] w-[60px] object-contain transition-transform duration-300 group-hover:rotate-3"
          />

          <div>
            <h1 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
              Bangla News 24
            </h1>

            <p className="text-xs text-gray-500 sm:text-sm">{date}</p>
          </div>
        </Link>

        {/* Authentication Buttons */}
        <div className="absolute right-4 hidden items-center gap-2 sm:flex">
          <Link
            href="/signin"
            className="btn btn-sm border-gray-300 bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="btn btn-sm border-red-600 bg-red-600 px-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <Navlinks />
    </header>
  );
};

export default Header;
