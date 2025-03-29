"use client";

import React, { useState } from "react";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

const Page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="min-h-[100vh] bg-[#F6F8FA] w-full nourd-text admin-dashboard">
      <div className={`w-full flex ${showMenu ? "overflow-hidden h-screen" : "sm:overflow-auto"}`}>
        <Sidebar 
          showMenu={showMenu} 
          setShowMenu={setShowMenu}
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />
        <div className="w-full flex flex-col">
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Page;
