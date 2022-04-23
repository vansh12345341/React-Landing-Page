import React, { useContext, useEffect, useRef } from "react";
import "./NavBarMobile.css";
import "./NavBar.css";
import { isMobileNavOpenContext } from "./NavBar";
const NavBarMobile = () => {
  const mobileNavRef = useRef();
  const [isMobileNavOpen] = useContext(isMobileNavOpenContext);

  useEffect(() => {
    console.log(isMobileNavOpen);

    isMobileNavOpen &&
      mobileNavRef.current.style.setProperty(
        "transform",
        `translateY(calc(0vh + 6rem))`
      );
  }, [isMobileNavOpen]);
  return (
    <div ref={mobileNavRef} className="Mobile-nav-div">
      <div className="nav__mobile_links_button_contener">
        <div className="nav__mobile_links_div">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Roadmap</a>
          <a href="#">Showcase</a>
          <a href="#">Team</a>
          <a href="#">Faq</a>
        </div>

        <div className="nav__mobile_button">
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
