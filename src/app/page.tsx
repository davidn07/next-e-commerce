"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>ShopVerse | Your Modern Shopping Destination</title>
        <meta
          name="description"
          content="ShopVerse - Discover top trends, deals, and a seamless shopping experience."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center px-4">
        <section className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-300">ShopVerse</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover the latest trends in fashion, electronics, lifestyle, and
            more — all in one place.
          </p>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <button
              onClick={() => router.push("/auth/login")}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/auth/register")}
              className="px-6 py-3 bg-yellow-300 text-indigo-800 font-semibold rounded-full shadow hover:bg-yellow-400 transition"
            >
              Register
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-center text-white/90">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Fast Delivery</h3>
            <p>
              Get your orders delivered in record time with real-time tracking.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">💳 Secure Payments</h3>
            <p>
              Your data is protected with industry-grade encryption and
              security.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🎁 Exclusive Offers</h3>
            <p>Enjoy member-only deals, flash sales, and rewards every day.</p>
          </div>
        </section>
      </main>
    </>
  );
}
