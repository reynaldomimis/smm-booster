import React from "react";
import "./styled.scss";

const CCardFeatures = ({ icon, title, description, aos }) => {
  return (
    <>
      <div className="ccardf" data-aos={aos}>
        <div className="c-wrapper">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className="t2">{title}</span>
        <span className="des">{description}</span>
      </div>
    </>
  );
};

export default CCardFeatures;
