import React from "react";
import Navbar from "./Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const FullNavbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <Navbar session={session} />
    </div>
  );
};

export default FullNavbar;
