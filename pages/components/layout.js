import React from "react";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;
  const pathSegments = path.split("/");
  const segment = pathSegments[1];

  const capitalizedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
  return (
    <>
      <Navbar />
      <Header title={capitalizedSegment} subtitle={`Sub ${capitalizedSegment}`} />
      <div className="min-h-screen py-[60px] px-[120px]">
        <div className="container mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
