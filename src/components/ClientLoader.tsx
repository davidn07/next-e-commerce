"use client";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("./Loader"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/95 backdrop-blur-3xl" />
  ),
});

export default function ClientLoader() {
  return <Loader />;
}
