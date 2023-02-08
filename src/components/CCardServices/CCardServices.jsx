import React from "react";
import "./styled.scss";

const CCardServices = ({ icon, name, view, aos }) => {
  return (
    <>
      <div className="ccservices" data-aos={aos}>
        <img src={icon} alt="" className="icon" />
        <h4>{name}</h4>
        <span>{view}</span>
      </div>
    </>
  );
};

export default CCardServices;
