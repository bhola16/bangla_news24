"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Invalid email or password.");
      return;
    }

    if (data) {
      toast.success("Signed in successfully.");
      redirect("/");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <fieldset className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <legend className="flex px-2 text-2xl font-bold text-gray-900">
            Sign In Here..
          </legend>

          <p className="mb-6 mt-2 text-sm text-gray-500">
            Sign in to your Bangla News 24 account.
          </p>

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
