import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b">
      {/* Top Header */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
        {/* Logo + Title - Center */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Bangla News 24 logo"
            width={60}
            height={60}
          />

          <div>
            <div className="text-2xl font-bold">Bangla News 24</div>
            <div className="text-sm text-gray-500">{date}</div>
          </div>
        </div>

        {/* Buttons - Right */}
        <div className="absolute right-4 flex gap-2">
          <button className="btn">Sign In</button>

          <button className="btn bg-red-500 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Navigation */}
      <Navlinks />
    </header>
  );
};

export default Header;