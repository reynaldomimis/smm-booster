import React from "react";
import CSidebar from "../../components/CSidebar/CSidebar";
import PNavbar from "../PNavbar/PNavbar";
import PContent from "../PContent/PContent";
import "./styled.scss";

const PMain = () => {
  return (
    <div className="pmain">
      <PNavbar />
      <section>
        <CSidebar />
        <PContent />
      </section>
    </div>
  );
};

export default PMain;
