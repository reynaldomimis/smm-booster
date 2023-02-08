import React from "react";
import CButton from "../../components/CButton/CButton";
import "./styled.scss";

const PMassOrder = () => {
  return (
    <div className="mass-order">
      <label className="label" for="comment">
        Comment
      </label>
      <textarea
        className="form-control"
        rows="9"
        id="comment"
        placeholder="service-id | link | quantity"
      />
      <CButton label="Submit" />
    </div>
  );
};

export default PMassOrder;
