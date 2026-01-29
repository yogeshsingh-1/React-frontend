import React from "react";
import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div
        className="relative w-full min-h-screen flex flex-col "
      >
        <Navbar />
        <main className="flex-1 bg-no-repeat bg-[length:100%_80%]" style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
