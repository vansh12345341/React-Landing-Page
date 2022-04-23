import React, { useEffect, useState } from "react";
import { arrow, imgs } from "../../assets/imgs";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  return scrollY >= 244 ? (
    <div onClick={goToTop} className="scrollTop_div">
      <img src={arrow} />
    </div>
  ) : null;
};

export default ScrollTop;
