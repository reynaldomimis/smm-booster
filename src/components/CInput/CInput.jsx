import React from "react";
import "./styled.scss";

const CInput = ({
  type,
  label,
  forLabel,
  name,
  value,
  onChange,
  placeholder,
  readonly,
}) => {
  return (
    <>
      <label className="label" for={forLabel}>
        {label}
      </label>
      <input
        className="input"
        id={forLabel}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readonly={readonly}
      />
    </>
  );
};

export default CInput;
