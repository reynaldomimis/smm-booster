import React from "react";
import "./styled.scss";

const CTerms = ({ children, aos }) => {
  return (
    <>
      <div data-aos={aos} className="ccterms">
        {children}
      </div>
    </>
  );
};

export default CTerms;
