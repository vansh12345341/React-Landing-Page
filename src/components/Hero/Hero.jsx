import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import HeroVideo from "../../assets/Home Video.mp4";
import Button from "../Button/Button";
const Hero = () => {
  const [counter, setCounter] = useState(0);
  const [textColor, setTextColor] = useState("");
  const [firstRender, setFirstRender] = useState(false);
  const ChangedTextRef = useRef();

  // to change the text every 20 seconds

  return (
    <section className="hero__section section__padding">
      <div className="hero__div">
        <div className="hero__text">
          <h3>Discover A New Era Of Cool</h3>
          {/* thpe wirter component and some settings  */}
          <Typewriter
            className="hero__changed_text"
            options={{
              strings: [
                "<span class=hero__nfts>NFTS<span />",
                "<span class=hero__COLLECTIBLE_ITEMS>COLLECTIBLE ITEMS <span />",
                "<span class=hero__APE_KILLER>APE KILLER! <span />",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero__desc">Bored Of Apes? Try Something New.</p>
          <Button
            top="20px"
            borderColor="rgb(32, 32, 32)"
            bgc="rgb(32, 32, 32)"
            color="white"
            content="Explore"
          />
        </div>
        <div className="hero__video_contener">
          <video
            className="hero__video"
            src={HeroVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
