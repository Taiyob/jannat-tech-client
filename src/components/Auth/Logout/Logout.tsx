"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    signOut({ callbackUrl: "/" });
    router.push("/");
  };

  return (
    <button onClick={handleLogout} type="button">
      Logout
    </button>
  );
};

export default Logout;
