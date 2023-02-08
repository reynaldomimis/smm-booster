import React from "react";
import "./styled.scss";

const CFaq = ({ question, answer }) => {
  return (
    <>
      <details data-aos="zoom-out-right">
        <summary>{question}</summary>
        <p>{answer}</p>
      </details>
    </>
  );
};

export default CFaq;
