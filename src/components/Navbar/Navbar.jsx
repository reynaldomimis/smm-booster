import React, { useState } from "react";
import { navList } from "../../context/ListData";
import { NavLink } from "react-router-dom";
import "./styled.scss";
import { languageList } from "../../context/ListData";
import VerticalNav from "../VerticalNav/VerticalNav";

const Navbar = () => {
  const [showNav, setNav] = useState(false);

  const onHandelNav = () => {
    setNav(!showNav);
  };

  return (
    <>
      <nav>
        <div className="left">
          <span>SMM BOOSTER</span>
          <div className="lang-wrap">
            <select name="lang">
              {languageList.length > 0 &&
                languageList.map((item, i) => {
                  return (
                    <option value={item.val} key={i}>
                      {item.label}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="right">
          <ul>
            {navList.length > 0 &&
              navList.map((item, i) => {
                return (
                  <NavLink className="li" to={item.path} key={i}>
                    {item.title}
                  </NavLink>
                );
              })}
          </ul>
          <span onClick={onHandelNav} className="material-symbols-outlined">
            {showNav ? "close" : "menu"}
          </span>
        </div>
      </nav>
      {showNav && <VerticalNav onClick={onHandelNav} />}
    </>
  );
};

export default Navbar;
