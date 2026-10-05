"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") ?? "");
    const image = String(formData.get("image") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
      callbackURL: "/",
    });

    // Sign up failed
    if (error) {
      toast.error(error.message || "Sign up failed.");
      return;
    }

    // Sign up successful
    if (data) {
      sessionStorage.setItem("signupSuccess", "true");
      redirect("/");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <fieldset className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <legend className="flex px-2 text-2xl font-bold text-gray-900">
            Create an Account
          </legend>

          <p className="mb-6 mt-2 text-sm text-gray-500">
            Sign up to get started with Bangla News 24.
          </p>

          {/* Name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Profile Image URL */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Profile Image URL
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/profile.jpg"
              className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

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

          {/* Submit Button */}
          <button
            type="submit"
            className="btn mt-6 w-full border-red-600 bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-md"
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
