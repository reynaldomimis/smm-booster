import React from "react";
import { Route } from "react-router-dom";
import About from "../pages/About/About";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Terms from "../pages/Terms/Terms";

const PublicRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
    </>
  );
};

export default PublicRoutes;
