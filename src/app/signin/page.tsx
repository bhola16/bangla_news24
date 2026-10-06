"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const SignInPage = () => {
  // Email + Password Sign In
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    // Sign in failed
    if (error) {
      toast.error(error.message || "Invalid email or password.");
      return;
    }

    // Sign in successful
    sessionStorage.setItem("loginSuccess", "true");

    console.log("LOGIN FLAG:", sessionStorage.getItem("loginSuccess"));

    window.location.href = "/";
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    sessionStorage.setItem("loginSuccess", "true");

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  // GitHub Sign In
  const handleGitHubSignIn = async () => {
    sessionStorage.setItem("loginSuccess", "true");

    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-3 px-4 py-10">
      {/* Email + Password Sign In */}
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <fieldset className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <legend className="flex px-2 text-2xl font-bold text-gray-900">
            Sign In Here..
          </legend>

          <p className="mb-6 mt-2 text-sm text-gray-500">
            Sign in to your Bangla News 24 account.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn mt-6 w-full border-red-600 bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-md"
          >
            Sign In
          </button>
        </fieldset>
      </form>

      {/* Google Sign In */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="btn w-full max-w-md border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
      >
        Sign In With Google
      </button>
      {/* GitHub Sign In */}
      <button
        type="button"
        onClick={handleGitHubSignIn}
        className="btn w-full max-w-md border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
      >
        Sign In With GitHub
      </button>
    </div>
  );
};

export default SignInPage;
