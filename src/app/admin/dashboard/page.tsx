import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard – TAJEZAPH Services",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <AdminDashboard />;
}
