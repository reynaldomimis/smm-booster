import React from "react";
import "./styled.scss";

const CButton = ({ label, onClick }) => {
  return (
    <>
      <div className="cbutton" onClick={onClick}>
        <span>{label}</span>
      </div>
    </>
  );
};

export default CButton;
