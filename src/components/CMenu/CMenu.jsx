import React from "react";
import "./styled.scss";

const CMenu = () => {
  return (
    <>
      <div className="top">
        <div className="middle">
          <div className="circle1 ic">
            <a href="#main">
              <span class="material-symbols-outlined">home</span>
            </a>
          </div>

          <div className="circle2 ic"></div>
          <div className="circle3 ic">
            <a href="#contact">
              <span class="material-symbols-outlined">mail</span>
            </a>
          </div>
          <div className="circle4 ic">
            <a href="#specialization">
              <span class="material-symbols-outlined">psychology</span>
            </a>
          </div>
          <div className="circle5 ic">
            <a href="#project">
              <span class="material-symbols-outlined">task</span>
            </a>
          </div>
          <div className="circle6 ic">
            <a href="">
              <span class="material-symbols-outlined">info</span>
            </a>
          </div>

          <div className="center">
            <h1>LOGO</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CMenu;
