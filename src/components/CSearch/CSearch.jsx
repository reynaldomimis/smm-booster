import React from "react";
import "./styled.scss";

const CSearch = () => {
  return (
    <>
      <div className="search">
        <input type="text" className="input" placeholder="Search" />
        <span className="material-symbols-outlined">search</span>
      </div>
    </>
  );
};

export default CSearch;
