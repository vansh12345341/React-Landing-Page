import React, { useState } from "react";
import "./Faq.css";
import FaqAccordion from "./FaqAccordion";
import { AccordionsData } from "../../assets/AccordionsData";
const Faq = () => {
  return (
    <section className="faq__section section__padding">
      <div className="faq__contener">
        <div className="faq__title">
          <h3> FAQ </h3>
        </div>
        <div className="faq__accordions_contener">
          {AccordionsData.map((accordionData) => {
            return (
              <FaqAccordion
                title={accordionData.title}
                desc={accordionData.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
