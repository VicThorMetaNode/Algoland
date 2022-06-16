import React from "react";

//Import components
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
}
