import React from "react";
import CButton from "../../components/CButton/CButton";
import CInput from "../../components/CInput/CInput";
import { paymentsList } from "../../context/ListData";
import "./styled.scss";

const PAddFunds = () => {
  return (
    <div className="add-funds" data-aos="fade-right">
      <span className="title">Method</span>
      <div className="method">
        <select>
          {paymentsList.length > 0 &&
            paymentsList.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item}
                </option>
              );
            })}
        </select>
      </div>

      <CInput label="Amount" type="number" min="0.1" max="9" />
      <CInput label="Charge" type="tel" />
      <CButton label="Pay" type="button" />
    </div>
  );
};

export default PAddFunds;
