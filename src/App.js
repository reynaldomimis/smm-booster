import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Public Routes
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Terms from "./pages/Terms/Terms";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";

import PMain from "./features/PMain/PMain";
import PNewOrder from "./features/PNewOrder/PNewOrder";
import PMassOrder from "./features/PMassOrder/PMassOrder";
import PAddFund from "./features/PAddFund/PAddFunds";
import PServices from "./features/PServices/PServices";
import PListOrder from "./features/PListOrder/PListOrder";
import PTicket from "./features/PTicket/PTicket";
import PUpdate from "./features/PUpdate/PUpdate";

import AOS from "aos";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="/profile" element={<PMain />}>
          <Route path="/profile" element={<PNewOrder />} />
          <Route path="/profile/mass-orders" element={<PMassOrder />} />
          <Route path="/profile/add-funds" element={<PAddFund />} />
          <Route path="/profile/services" element={<PServices />} />
          <Route path="/profile/orders" element={<PListOrder />} />
          <Route path="/profile/tickets" element={<PTicket />} />
          <Route path="/profile/updates" element={<PUpdate />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
