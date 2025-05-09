"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-white/80 mb-6">
        Oops! The page you&apos;re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
