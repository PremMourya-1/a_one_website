import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/front/header/Header";
import Footer from "../components/front/Footer/Footer";

function WebLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default WebLayout;
