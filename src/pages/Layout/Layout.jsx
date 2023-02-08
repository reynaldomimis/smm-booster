import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./styled.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
