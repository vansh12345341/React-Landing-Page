import React, { useContext, useEffect, useRef } from "react";
import "./NavBarMobile.css";
import "./NavBar.css";
import { isMobileNavOpenContext } from "./NavBar";
const NavBarMobile = () => {
  const mobileNavRef = useRef();
  const [isMobileNavOpen, setIsMobileNavOpen, mobileNavDivRef] = useContext(
    isMobileNavOpenContext
  );

  useEffect(() => {
    isMobileNavOpen &&
      mobileNavRef.current.style.setProperty(
        "transform",
        `translateY(calc(0vh + 6rem))`
      );
  }, [isMobileNavOpen]);
  const clickHandler = () => setIsMobileNavOpen((pre) => !pre);
  return (
    <div ref={mobileNavRef} className="Mobile-nav-div">
      <div className="nav__mobile_links_button_contener">
        <div className="nav__mobile_links_div">
          <a onClick={clickHandler} href="#Home">
            Home
          </a>
          <a onClick={clickHandler} href="#About">
            About
          </a>
          <a onClick={clickHandler} href="#Roadmap">
            Roadmap
          </a>
          <a onClick={clickHandler} href="#Showcase">
            Showcase
          </a>
          <a onClick={clickHandler} href="#Team">
            Team
          </a>
          <a onClick={clickHandler} href="#Faq">
            Faq
          </a>
        </div>

        <div className="nav__mobile_button">
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
