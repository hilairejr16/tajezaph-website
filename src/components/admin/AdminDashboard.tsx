"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Image, MessageSquare, FileText, Star, Settings,
  Upload, Eye, Plus, Trash2, Edit, LogOut, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "quotes", label: "Quote Requests", icon: FileText },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

const mockQuotes = [
  { id: "1", name: "John Smith", service: "Kitchen Remodeling", budget: "$10,000–$20,000", date: "2024-03-15", status: "new" as const },
  { id: "2", name: "Maria Garcia", service: "Bathroom Renovation", budget: "$5,000–$10,000", date: "2024-03-14", status: "reviewed" as const },
  { id: "3", name: "Robert Johnson", service: "Flooring", budget: "$2,000–$5,000", date: "2024-03-13", status: "quoted" as const },
];

const statusColors = {
  new: "bg-blue-100 text-blue-700",
  reviewed: "bg-yellow-100 text-yellow-700",
  quoted: "bg-purple-100 text-purple-700",
  accepted: "bg-green-100 text-green-700",
  declined: "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ password: "" });
  const [loginError, setLoginError] = useState("");

  // Simple client-side gate — real auth via Supabase in production
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this should validate against Supabase/server
    if (loginForm.password === "tajezaph2024!") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password. Contact site administrator.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-blue-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-brand-gold rounded-xl flex items-center justify-center mx-auto mb-3 font-heading font-black text-brand-blue-dark text-2xl">
              T
            </div>
            <h1 className="font-heading font-black text-brand-blue-dark text-xl">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">TAJEZAPH Services</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ password: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none"
                placeholder="Enter admin password"
                required
              />
              {loginError && <p className="text-red-500 text-xs mt-1">{loginError}</p>}
            </div>
            <Button type="submit" className="w-full" variant="default">
              Sign In
            </Button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4">
            Protected admin area. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-brand-blue-dark flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Sidebar Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center font-heading font-black text-brand-blue-dark text-sm">
              T
            </div>
            <span className="text-white font-heading font-bold text-sm">Admin Panel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                activeTab === item.id
                  ? "bg-brand-gold text-brand-blue-dark"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <item.icon size={17} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <LogOut size={17} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-gray-900">
              <Menu size={22} />
            </button>
            <h1 className="font-heading font-bold text-brand-blue-dark text-lg capitalize">
              {activeTab === "overview" ? "Dashboard Overview" : navItems.find(n => n.id === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm hidden sm:block">Emmanuel Louis</span>
            <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue-dark font-bold text-sm">
              E
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "quotes" && <QuotesTab />}
          {activeTab === "gallery" && <GalleryTab />}
          {activeTab === "testimonials" && <TestimonialsTab />}
          {activeTab === "messages" && <MessagesTab />}
          {activeTab === "settings" && <SettingsTab />}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}

function OverviewTab() {
  const cards = [
    { label: "New Quote Requests", value: "3", color: "bg-blue-500", sub: "This week" },
    { label: "Unread Messages", value: "7", color: "bg-purple-500", sub: "Need reply" },
    { label: "Gallery Photos", value: "24", color: "bg-brand-gold", sub: "Uploaded" },
    { label: "Testimonials", value: "6", color: "bg-green-500", sub: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl shadow-card p-5">
            <div className={`w-10 h-10 ${c.color} rounded-lg mb-3`} />
            <p className="text-2xl font-heading font-black text-brand-blue-dark">{c.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{c.label}</p>
            <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-heading font-bold text-brand-blue-dark mb-4">Recent Quote Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 text-gray-500 font-semibold">Customer</th>
                <th className="text-left py-2 text-gray-500 font-semibold">Service</th>
                <th className="text-left py-2 text-gray-500 font-semibold">Budget</th>
                <th className="text-left py-2 text-gray-500 font-semibold">Status</th>
                <th className="text-left py-2 text-gray-500 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockQuotes.map((q) => (
                <tr key={q.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 font-medium text-brand-blue-dark">{q.name}</td>
                  <td className="py-3 text-gray-600">{q.service}</td>
                  <td className="py-3 text-gray-600">{q.budget}</td>
                  <td className="py-3">
                    <span className={cn("px-2 py-0.5 rounded-full text-xs font-semibold capitalize", statusColors[q.status])}>
                      {q.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500">{q.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function QuotesTab() {
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-bold text-brand-blue-dark text-lg">Quote Requests</h3>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">3 New</span>
      </div>
      <div className="space-y-4">
        {mockQuotes.map((q) => (
          <div key={q.id} className="border border-gray-100 rounded-xl p-5 hover:shadow-card transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-heading font-bold text-brand-blue-dark">{q.name}</p>
                <p className="text-gray-600 text-sm">{q.service} · {q.budget}</p>
                <p className="text-gray-400 text-xs mt-1">{q.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={cn("px-2 py-0.5 rounded-full text-xs font-semibold capitalize", statusColors[q.status])}>
                  {q.status}
                </span>
                <button className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Eye size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryTab() {
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-heading font-bold text-brand-blue-dark text-lg mb-4">Upload Photos & Videos</h3>
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center hover:border-brand-blue transition-colors cursor-pointer">
          <Upload size={36} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">Drag & drop photos/videos here</p>
          <p className="text-gray-400 text-sm mt-1">Or click to browse files</p>
          <p className="text-gray-400 text-xs mt-2">JPG, PNG, MP4 up to 50MB each</p>
          <Button variant="default" size="sm" className="mt-4 gap-2">
            <Plus size={14} />
            Choose Files
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-heading font-bold text-brand-blue-dark text-lg mb-4">Gallery Items (24)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={`https://images.unsplash.com/photo-155660${9172 + i}0-54557c7e4fb7?w=200&q=60`}
                alt={`Gallery item ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-gold hover:text-brand-blue-dark transition-colors">
                  <Edit size={14} />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialsTab() {
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading font-bold text-brand-blue-dark text-lg">Testimonials</h3>
        <Button variant="gold" size="sm" className="gap-2">
          <Plus size={14} />
          Add New
        </Button>
      </div>
      <p className="text-gray-500 text-sm">Manage customer testimonials shown on your website.</p>
      <div className="mt-4 space-y-3">
        {["Maria Johnson — Kitchen Remodeling", "David Chen — Water Damage", "Patricia Williams — Carpentry"].map((t) => (
          <div key={t} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
            <span className="text-sm font-medium text-brand-blue-dark">{t}</span>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-brand-blue transition-colors"><Edit size={14} /></button>
              <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagesTab() {
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <h3 className="font-heading font-bold text-brand-blue-dark text-lg mb-4">Contact Messages</h3>
      <p className="text-gray-500 text-sm">Messages sent through the contact form appear here.</p>
      <div className="mt-4 text-center py-12 text-gray-400">
        <MessageSquare size={36} className="mx-auto mb-3 opacity-30" />
        <p className="text-sm">Messages will appear here. Connect Supabase to enable storage.</p>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <h3 className="font-heading font-bold text-brand-blue-dark text-lg mb-5">Site Settings</h3>
      <div className="space-y-4 max-w-lg">
        {[
          { label: "Business Name", value: "TAJEZAPH Services" },
          { label: "Phone Number", value: "(267) 788-3933" },
          { label: "Email Address", value: "emmanuellouis79@yahoo.com" },
          { label: "Service Area", value: "Philadelphia, PA & Surrounding Areas" },
        ].map((field) => (
          <div key={field.label}>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">{field.label}</label>
            <input
              defaultValue={field.value}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none"
            />
          </div>
        ))}
        <Button variant="gold" className="mt-2">Save Changes</Button>
      </div>
    </div>
  );
}
