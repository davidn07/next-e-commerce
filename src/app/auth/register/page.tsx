import Head from "next/head";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register | ShopVerse</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
            Create Your Account
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-pink-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
