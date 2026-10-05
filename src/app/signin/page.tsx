"use client";

const SignInPage = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <form className="w-full max-w-md">
        <fieldset className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <legend className="flex px-2 text-2xl font-bold text-gray-900">
            Welcome Back
          </legend>

          <p className="mb-6 mt-2 text-sm text-gray-500">
            Sign in to continue to Bangla News 24.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn mt-6 w-full border-red-600 bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-md"
          >
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
