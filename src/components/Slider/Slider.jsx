import React, { useEffect, useRef } from "react";
import { imgs } from "../../assets/imgs";
import { e } from "../../assets/imgs";
import "./Slider.css";
const Slider = () => {
  const upperArray = imgs.slice(5);
  const lowerArray = imgs.slice(0, 5);
  return (
    <section id="Showcase" className="slider__section">
      <div className="slider__content_contener section__padding">
        <div className="slider__upperPart">
          <div className="slider__item_contener">
            {upperArray.map((img) => {
              return (
                <div className="sliderItem__div-upper">
                  <img className="sliderItem__img" src={img.img} />
                  <div className="sliderItem__info_div">
                    <div className="sliderItem__info_first_div">
                      <p className="sliderItem__info_title"> Weirdos </p>
                      <p className="sliderItem__info_property"> #{img.rank} </p>
                    </div>
                    <div className="sliderItem__info_second_div">
                      <p className="sliderItem__info_title"> Price </p>
                      <p className="sliderItem__info_property_price">
                        <img src={e}></img> {img.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="slider__lowerPart">
          <div className="slider__item_contener-lower">
            {lowerArray.map((img) => {
              return (
                <div className="sliderItem__div-lower ">
                  <img className="sliderItem__img" src={img.img} />
                  <div className="sliderItem__info_div">
                    <div className="sliderItem__info_first_div">
                      <p className="sliderItem__info_title"> Weirdos </p>
                      <p className="sliderItem__info_property"> #{img.rank} </p>
                    </div>
                    <div className="sliderItem__info_second_div">
                      <p className="sliderItem__info_title"> Price </p>
                      <p className="sliderItem__info_property_price">
                        <img src={e}></img> {img.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
