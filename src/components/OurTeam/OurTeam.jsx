import React, { useEffect, useState } from "react";
import "./OurTeam.css";
import OurTeamItem from "./OurTeamItem";
import { imgs } from "../../assets/imgs";
import Confetti from "react-confetti";

const OurTeam = () => {
  const [counter, setCounter] = useState(0);
  const [width, setWidth] = useState(0);
  const SlicedImgs = imgs.slice(0, imgs.length - 2);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <section id="Team" className="section__padding ourTeam__section">
        <div className="div__title">
          <h4>Team</h4>
        </div>
        <div className="ourTeam__div">
          <Confetti
            width={width - 60}
            style={{ inset: "0 50% 0 50%" }}
            height={1000}
          />

          {SlicedImgs.map((slicedImgs) => {
            return (
              <OurTeamItem
                img={slicedImgs.img}
                name={slicedImgs.name}
                job={slicedImgs.job}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
