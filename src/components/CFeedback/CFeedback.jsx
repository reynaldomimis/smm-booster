import React from "react";
import "./styled.scss";

const CFeedback = ({ des, name, content, dp, aos }) => {
  return (
    <>
      <div className="feedback" data-aos={aos}>
        <p>{content}</p>
        <div className="profiles">
          <img src={dp} alt="" className="dp" />
          <div className="profile-wrapper">
            <span className="c-name">{name}</span>
            <span className="des">{des}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CFeedback;
