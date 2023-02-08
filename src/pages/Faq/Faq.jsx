import React from "react";
import CFaq from "../../components/CFaq/CFaq";
import { faqList } from "../../context/ListData";
import CHeader from "../../components/CHeader/CHeader";
import "./styled.scss";

const Faq = () => {
  return (
    <div className="frequently">
      <CHeader title="Frequently Asked Questions (FAQ)" />
      <div className="qcard">
        {faqList.length > 0 &&
          faqList.map((item, i) => {
            return <CFaq question={item.quest} answer={item.answer} key={i} />;
          })}
      </div>
    </div>
  );
};

export default Faq;
