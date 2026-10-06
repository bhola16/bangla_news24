import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-lg text-center">
        {/* 404 */}
        <div className="mb-6">
          <h1 className="text-8xl font-black tracking-tight text-red-600 sm:text-9xl">
            404
          </h1>

          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-red-600"></div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved. Please check the URL or return to the homepage.
        </p>

        {/* Action */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="btn border-red-600 bg-red-600 px-6 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-md"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>

        {/* Brand */}
        <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Bangla News 24
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
