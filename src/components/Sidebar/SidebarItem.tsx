// src/components/Sidebar/SidebarItem.tsx
import type { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export default function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100
        ${active ? "font-bold" : "font-medium"}`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
