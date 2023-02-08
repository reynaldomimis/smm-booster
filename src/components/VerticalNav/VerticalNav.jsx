import React from "react";
import { navList } from "../../context/ListData";
import { NavLink } from "react-router-dom";
import "./styled.scss";
import { languageList } from "../../context/ListData";

const VerticalNav = ({ onClick }) => {
  return (
    <>
      <nav className="vnav">
        <ul>
          {navList.length > 0 &&
            navList.map((item, i) => {
              return (
                <NavLink
                  onClick={onClick}
                  className="li"
                  to={item.path}
                  key={i}
                >
                  {item.title}
                </NavLink>
              );
            })}

          <div className="lang-con">
            <select name="lang">
              {languageList.length > 0 &&
                languageList.map((item, i) => {
                  return <option value={item.val}>{item.label}</option>;
                })}
            </select>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default VerticalNav;
