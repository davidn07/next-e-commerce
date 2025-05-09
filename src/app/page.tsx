"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const router = useRouter();

  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsDelayed(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isDelayed) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>ShopVerse | Your Modern Shopping Destination</title>
        <meta
          name="description"
          content="ShopVerse - Discover top trends, deals, and a seamless shopping experience."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-75" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Welcome to <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                ShopVerse
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover the future of online shopping with curated collections,
              AI-powered recommendations, and seamless checkout experiences.
            </p>
            <div className="flex justify-center gap-6 mb-16 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/auth/login")}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-teal-500/20 transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/auth/register")}
                className="px-8 py-4 border-2 border-teal-400/50 bg-gray-800/50 text-white font-bold rounded-2xl shadow-xl hover:border-teal-400 hover:bg-gray-800/70 backdrop-blur-sm transition-all"
              >
                Join Free
              </motion.button>
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
          >
            {[
              {
                icon: "🚚",
                title: "Instant Delivery",
                text: "Same-day shipping to 500+ cities worldwide",
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                text: "Bank-grade encryption for all transactions",
              },
              {
                icon: "🎉",
                title: "Exclusive Deals",
                text: "Member-only discounts and early access",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 hover:border-teal-400/30 transition-all"
              >
                <div className="text-5xl mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-teal-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Brands */}
          <div className="mt-24 w-full max-w-5xl">
            <h3 className="text-gray-400 text-center mb-8 text-lg">
              Trusted by leading brands
            </h3>
            <div className="flex justify-center gap-12 flex-wrap opacity-70 hover:opacity-100 transition-opacity">
              {[
                "TechCorp",
                "FashionPlus",
                "HomeHub",
                "ElectroWorld",
                "StyleMakers",
              ].map((brand, index) => (
                <div
                  key={index}
                  className="text-2xl font-bold text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
