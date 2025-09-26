// src/components/Sidebar/Sidebar.tsx
import {
  AiFillHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdExplore, MdVideoLibrary } from "react-icons/md";
import { FiMessageSquare, FiHeart, FiPlusSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-80 h-screen border-r border-gray-300 bg-white p-4 flex flex-col space-y-2">
      <h1 className="text-2xl font-bold mb-6">Instagram</h1>

      <SidebarItem icon={<AiFillHome />} label="Home" active />
      <SidebarItem icon={<AiOutlineSearch />} label="Search" />
      <SidebarItem icon={<MdExplore />} label="Explore" />
      <SidebarItem icon={<MdVideoLibrary />} label="Reels" />
      <SidebarItem icon={<FiMessageSquare />} label="Messages" />
      <SidebarItem icon={<FiHeart />} label="Notifications" />
      <SidebarItem icon={<FiPlusSquare />} label="Create" />
      <SidebarItem icon={<CgProfile />} label="Profile" />
      <SidebarItem icon={<RxHamburgerMenu />} label="More" />
    </aside>
  );
}
