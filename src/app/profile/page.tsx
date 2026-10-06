"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Loading state
  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-red-600"></span>
          <p className="mt-3 text-sm text-gray-500">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600">
            !
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            You are not signed in
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Please sign in to view your profile.
          </p>

          <a
            href="/signin"
            className="btn mt-6 border-red-600 bg-red-600 px-6 text-white hover:border-red-700 hover:bg-red-700"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  const handleEdit = () => {
    setName(user.name || "");
    setImage(user.image || "");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName("");
    setImage("");
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }

    setIsUpdating(true);

    const { error } = await authClient.updateUser({
      name: name.trim(),
      image: image.trim() || null,
    });

    setIsUpdating(false);

    if (error) {
      toast.error(error.message || "Failed to update profile.");
      return;
    }

    toast.success("Profile updated successfully!");

    setIsEditing(false);
  };

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Sign out failed.");
      return;
    }

    toast.success("Signed out successfully!");

    window.location.href = "/";
  };

  const createdAt = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "N/A";

  const updatedAt = user.updatedAt
    ? new Date(user.updatedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="min-h-[75vh] bg-gray-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Manage your Bangla News 24 account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          {/* Red Header */}
          <div className="h-32 bg-red-600 sm:h-40"></div>

          {/* Profile Image */}
          <div className="-mt-16 flex justify-center sm:-mt-20">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name || "User profile"}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg sm:h-40 sm:w-40"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-red-600 text-4xl font-bold text-white shadow-lg sm:h-40 sm:w-40 sm:text-5xl">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
          </div>

          {/* User Name */}
          <div className="px-6 pb-8 pt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {user.name || "User"}
            </h2>

            <p className="mt-1 text-gray-500">{user.email}</p>

            {/* Verification */}
            <div className="mt-3 flex justify-center">
              {user.emailVerified ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  ✓ Email Verified
                </span>
              ) : (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  ! Email Not Verified
                </span>
              )}
            </div>
          </div>

          {/* Edit Profile */}
          <div className="border-t border-gray-200 p-6 sm:p-8">
            {!isEditing ? (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Account Information
                  </h3>

                  <button
                    onClick={handleEdit}
                    className="btn btn-sm border-red-600 bg-red-600 px-4 text-white hover:border-red-700 hover:bg-red-700"
                  >
                    Edit Profile
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Full Name
                    </p>

                    <p className="mt-1 break-words font-semibold text-gray-800">
                      {user.name || "Not provided"}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Email Address
                    </p>

                    <p className="mt-1 break-words font-semibold text-gray-800">
                      {user.email}
                    </p>
                  </div>

                  {/* User ID */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      User ID
                    </p>

                    <p className="mt-1 break-all font-mono text-sm text-gray-700">
                      {user.id}
                    </p>
                  </div>

                  {/* Account Created */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Account Created
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {createdAt}
                    </p>
                  </div>

                  {/* Last Updated */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Last Updated
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {updatedAt}
                    </p>
                  </div>

                  {/* Account Status */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Account Status
                    </p>

                    <p className="mt-1 font-semibold text-green-600">Active</p>
                  </div>
                </div>
              </>
            ) : (
              /* Edit Form */
              <form onSubmit={handleUpdate}>
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Edit Profile
                </h3>

                {/* Name */}
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Image URL */}
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Profile Image URL
                  </label>

                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com/profile.jpg"
                    className="input w-full border-gray-300 bg-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Enter a direct URL to your profile image.
                  </p>
                </div>

                {/* Image Preview */}
                {image && (
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold text-gray-700">
                      Image Preview
                    </p>

                    <img
                      src={image}
                      alt="Profile preview"
                      className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn border-gray-300 bg-white px-6 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isUpdating}
                    className="btn border-red-600 bg-red-600 px-6 text-white hover:border-red-700 hover:bg-red-700"
                  >
                    {isUpdating ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Updating...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sign Out */}
          {!isEditing && (
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-5 sm:px-8">
              <div className="flex justify-end">
                <button
                  onClick={handleSignOut}
                  className="btn border-red-600 bg-red-600 px-6 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-md"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
