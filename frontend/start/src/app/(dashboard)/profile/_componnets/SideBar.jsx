"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import ButtonIcon from "@/ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";

function SideBar({ onClose }) {
  const { logout } = useAuth();

  return (
    <div className="overflow-y-auto flex flex-col p-6  h-screen pt-10 lg:pt-8">
      {/* Sidebar header */}
      <div className="flex items-center justify-between w-full mb-5 pb-2 border-b  border-b-secondary-200 ">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700 lg:flex-1"
        >
          <HomeIcon className="w-6 h-6" />
          <span> نکست بلاگ</span>
        </Link>

        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
      </div>

      {/* Sidebar content */}
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          // onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
