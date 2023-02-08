import React, { useState } from "react";
import "./styled.scss";
import { fiatList } from "../../context/ListData";
import VerticalNav from "../../components/VerticalNav/VerticalNav";

const PNavbar = () => {
  const [showNav, setNav] = useState(false);

  const onHandelNav = () => {
    setNav(!showNav);
  };

  return (
    <>
      <nav className="pnav">
        <strong>SMM BOOSTER</strong>
        <div className="right">
          <div className="lang-wrap">
            <select name="lang">
              {fiatList.length > 0 &&
                fiatList.map((item, i) => {
                  return <option value={item.val}>{item.label}</option>;
                })}
            </select>
          </div>
          <span>Account</span>
          <span onClick={onHandelNav} className="material-symbols-outlined">
            {showNav ? "close" : "menu"}
          </span>
        </div>
      </nav>
      {showNav && <VerticalNav onClick={onHandelNav} />}
    </>
  );
};

export default PNavbar;
