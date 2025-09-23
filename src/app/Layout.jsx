import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import ScrollToTop from "../components/scrollToTop";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
