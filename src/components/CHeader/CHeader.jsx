import React from "react";
import "./styled.scss";

const CHeader = ({ title, des }) => {
  return (
    <>
      <header>
        <h1 data-aos="zoom-out-right">{title}</h1>
        <p data-aos="zoom-out-right">{des}</p>
      </header>
    </>
  );
};

export default CHeader;
