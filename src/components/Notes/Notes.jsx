import React from "react";
import "./styled.scss";

const Notes = ({ name }) => {
  const words = name.split(" | ");
  const cleanedWords = words.map((word) => word.replace(/[^\x00-\x7F]/g, ""));
  return (
    <>
      <article className="notes">
        <ul className="feature">
          {cleanedWords.map((word, index) => (
            <li key={index}>☉ {word}</li>
          ))}
        </ul>
        <h5>📌 Notes</h5>
        <ul className="warnings">
          <li>
            🟠 Depending on the intensity of service, start times may vary.
          </li>
          <li>
            🟠 Your account must not be private, otherwise no action will be
            taken.
          </li>
          <li>
            🟠 Do not take the second order on the same link before the order is
            finished!
          </li>
        </ul>
      </article>
    </>
  );
};

export default Notes;
