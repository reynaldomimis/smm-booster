import React from "react";
import { articleList } from "../../context/ListData";
import "./styled.scss";

const About = () => {
  return (
    <div className="about">
      <section>
        {articleList.map((term) => (
          <article key={term.title}>
            <span>{term.title}</span>
            {term.content.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </article>
        ))}
      </section>
    </div>
  );
};

export default About;
