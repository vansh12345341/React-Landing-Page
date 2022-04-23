import React, { useState, useRef, useEffect } from "react";
import "./FaqAccordion.css";
import { AiOutlinePlus } from "react-icons/ai";
const FaqAccordion = ({ title, desc }) => {
  const [visible, setVisible] = useState(false);
  const titleRef = useRef();
  const spanRef = useRef();

  useEffect(() => {
    const height = spanRef.current.scrollHeight;

    if (visible) {
      spanRef.current.style.setProperty("--height", `${height}px`);
      titleRef.current.classList.add("active");
      titleRef.current.classList.remove("disactive");
    } else {
      titleRef.current.classList.add("disactive");
      titleRef.current.classList.remove("active");
      spanRef.current.style.setProperty("--height", "0px");
    }
  }, [visible]);

  const visibleOrNot = () => {
    setVisible((pre) => !pre);
  };
  return (
    <div className="faq__accordion">
      <p className="faq__accordion_title" ref={titleRef} onClick={visibleOrNot}>
        {title}
      </p>
      <div ref={spanRef} className="faq__accordion_span">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;
