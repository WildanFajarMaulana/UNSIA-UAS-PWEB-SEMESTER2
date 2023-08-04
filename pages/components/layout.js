import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="min-h-screen py-[60px] px-[120px]">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
