import Footer from "@/components/Shared/Footer/Footer";
import FullNavbar from "@/components/Shared/Navbar/FullNavbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <FullNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
