import React from "react";
import CTerms from "../../components/CTerms/CTerms";
import { termsList } from "../../context/ListData";
import "./styled.scss";

const Terms = () => {
  return (
    <div className="terms">
      <section>
        {termsList.map((term) => (
          <CTerms aos={term.aos} key={term.type}>
            <h2>{term.type}</h2>
            <ul>
              {term.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CTerms>
        ))}
      </section>
    </div>
  );
};

export default Terms;
