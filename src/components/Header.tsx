import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import UserInfoPage from "./UserInfo";

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

        <UserInfoPage></UserInfoPage>
      </div>

      {/* Navigation */}
      <Navlinks />
    </header>
  );
};

export default Header;
