import Logout from "@/components/Auth/Logout/Logout";
import Link from "next/link";
import React, { ReactNode } from "react";
import { CiHome } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { ImParagraphCenter } from "react-icons/im";
import { MdOutlineManageAccounts, MdVerifiedUser } from "react-icons/md";
import { RiEditCircleLine, RiUserLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar Area */}
      <div className="w-1/5 p-6 bg-gray-800 space-y-4">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            <li className="flex items-center mb-4">
              <span className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center">
                <RxDashboard /> Dashboard
              </span>
            </li>
            <li className="flex items-center mb-4">
              <Link
                href={`/dashboard/update-profile`}
                className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center hover:bg-pink-600 w-full rounded-lg py-2 hover:text-white"
              >
                <RiEditCircleLine /> Update My Info
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            <li className="flex items-center mb-4">
              <span className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center">
                <MdOutlineManageAccounts /> My Profile
              </span>
            </li>
            <li className="flex items-center mb-4">
              <Link
                href={`/dashboard/profile`}
                className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center hover:bg-pink-600 w-full rounded-lg py-2 hover:text-white"
              >
                <RiUserLine /> Profile Section
              </Link>
            </li>
            <li className="flex items-center mb-4">
              <Link
                href={`/dashboard/verify-profile`}
                className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center hover:bg-pink-600 w-full rounded-lg py-2 hover:text-white"
              >
                <MdVerifiedUser /> Verify Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Card */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            <li className="flex items-center mb-4">
              <Link
                href={`/dashboard/blog`}
                className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center"
              >
                <ImParagraphCenter /> All Post
              </Link>
            </li>
          </ul>
        </div>

        {/* Fourth Card */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            <li className="flex items-center mb-4">
              <Link
                href={`/`}
                className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center"
              >
                <CiHome /> Home
              </Link>
            </li>
            <li className="flex items-center mb-4">
              {/* <Logout /> */}
              <div className="text-lg font-semibold mr-2 flex gap-2 justify-center items-center">
                <FaSignOutAlt /> <Logout />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-4/5 bg-white p-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
