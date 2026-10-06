"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const UserInfoPage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Sign out failed.");
      return;
    }

    toast.success("Signed out successfully.");
  };

  return (
    <div className="absolute right-4 hidden items-center gap-2 sm:flex">
      {user ? (
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          {user.image ? (
            <Link
            href={'/profile'}
            >
              <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-red-500 ring-offset-2 ring-offset-white">
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-bold text-white">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* User Name */}
          <h2 className="font-semibold text-gray-800">{user.name}</h2>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="btn btn-sm border-red-600 bg-red-600 px-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-md"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            href="/signin"
            className="btn btn-sm border-gray-300 bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="btn btn-sm border-red-600 bg-red-600 px-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfoPage;
