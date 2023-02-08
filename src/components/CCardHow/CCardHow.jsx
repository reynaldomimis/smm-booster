import React from "react";
import "./styled.scss";

const CCardHow = ({ step, title, description, aos }) => {
  return (
    <>
      <div className="ccardh" data-aos={aos}>
        <span className="step">{step}</span>
        <span className="t2">{title}</span>
        <span className="des">{description}</span>
      </div>
    </>
  );
};

export default CCardHow;
