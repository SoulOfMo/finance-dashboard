// import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Link from "next/link";

export default function Home() {
  return (
    // <DashboardLayout />
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1>Welcome To Delfin</h1>
      <Link
        href="/dashboard"
        className="hidden text-blue-500 hover:underline md:block"
      >
        Go to Dashboard
      </Link>
      <p className="text-2xl text-blue-500 md:hidden">Desktop View only</p>
    </div>
  );
}
