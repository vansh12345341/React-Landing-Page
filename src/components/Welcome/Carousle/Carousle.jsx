import React, { useEffect, useRef, useState } from "react";
import "./Carousle.css";
import { imgs } from "../../../assets/imgs";
import { arrow } from "../../../assets/imgs";
const Carousle = () => {
  const [counter, setCounter] = useState(0);
  const sliderRef = useRef();
  // chagne the image
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === imgs.length - 1) {
        setCounter(0);
      } else {
        setCounter((pre) => pre + 1);
      }
    }, 5000);
    sliderRef.current.style.setProperty(
      "--translate-value",
      `translate( ${(-sliderRef.current.clientWidth + 1) * counter}px)`
    );
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  // to change the image
  const nextOrPre = (e) => {
    switch (e.target.id) {
      case "next":
        if (counter === imgs.length - 1) {
          setCounter(0);
        } else {
          setCounter((pre) => pre + 1);
        }
        break;
      case "pre":
        if (counter === 0) {
          setCounter(imgs.length - 1);
        } else {
          setCounter((pre) => pre - 1);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="caroulse">
      <div className="arrows__div">
        <img
          src={arrow}
          id="next"
          onClick={(e) => nextOrPre(e)}
          className="carousle__arrow"
        />
        <img
          src={arrow}
          id="pre"
          onClick={(e) => nextOrPre(e)}
          className="carousle__arrow_reversed"
        />
      </div>
      <div className="caroulse__bottom_section">
        <p>
          {counter + 1}/{imgs.length}
        </p>
      </div>
      <div ref={sliderRef} className="caroulse__slider">
        {imgs.map((img) => {
          return (
            <div className="slider__img_div">
              <img className="slider__img" src={img.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousle;
