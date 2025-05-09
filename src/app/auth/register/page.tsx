"use client";
import FormInput from "@/components/FormInput";
import { useForm } from "@/hooks/useForm";
import Head from "next/head";
import Link from "next/link";

interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
}

export default function Register() {
  const initialValues: RegisterFormValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    // Handle form submission logic and log the values in JSON format
    console.log("Register Form Data:", JSON.stringify(values, null, 2));
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit: handleFormSubmit,
    isSubmitting,
  } = useForm(initialValues, handleSubmit);
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
          <form onSubmit={handleFormSubmit}>
            <FormInput
              label="Full Name"
              name="fullName"
              type="fullName"
              value={values.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Register"}
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
