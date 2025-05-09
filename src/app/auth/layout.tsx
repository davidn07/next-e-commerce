import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Common Navbar */}
      <Navbar />

      {/* Page content (login, register, etc.) */}
      <main>{children}</main>
    </div>
  );
}
