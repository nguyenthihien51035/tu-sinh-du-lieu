import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navigation />
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
