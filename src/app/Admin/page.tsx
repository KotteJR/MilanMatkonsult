"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Layout, Trash2, LogOut } from "lucide-react";
import { useAuth } from "./AuthContext";

export default function AdminDashboard() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const menuItems = [
    {
      href: "/Admin/Projects",
      label: "Projekt",
      icon: FileText,
      description: "Skapa och hantera projekt"
    },
    {
      href: "/Admin/ManageProjects",
      label: "Hantera projekt",
      icon: Trash2,
      description: "Visa och ta bort befintliga projekt"
    },
    {
      href: "/Admin/Layout",
      label: "Layout",
      icon: Layout,
      description: "Välj vilka projekt som visas på hemsidan"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium mb-3">Dashboard för mina braća Mitrović</h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
              Välkommen till administrationspanelen! Här kan du skapa och hantera projekt, välja vilka projekt som visas på hemsidan, och ta bort befintliga projekt. Använd menyalternativen nedan för att navigera mellan olika funktioner.
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <LogOut size={16} />
            Logga ut
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`p-6 rounded-2xl border transition-all hover:shadow-sm transition-shadow ${
                  isActive 
                    ? "border-[#E88026]" 
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-xl ${
                    isActive ? "bg-[#E88026]" : "bg-gray-100"
                  }`}>
                    <Icon size={24} className={isActive ? "text-white" : "text-gray-600"} />
                  </div>
                  <h2 className="text-xl font-medium text-[#010207]">{item.label}</h2>
                </div>
                <p className="text-[#6B6B6B] text-sm">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

