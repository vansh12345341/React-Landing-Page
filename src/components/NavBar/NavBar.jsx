import React, { useRef, useState, createContext, useEffect } from "react";
import Button from "../Button/Button";
import "./NavBar.css";
import NavBarMobile from "./NavBarMobile";

// context api to sent the the state to the navBar mobile component
export const isMobileNavOpenContext = createContext();
const NavBar = () => {
  //ref to the mobile menu icon
  const mobileNavDivRef = useRef();

  // state to set is the menu open or closed
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMobileNavOpen]);
  const NavMobileClickHandler = () => {
    setIsMobileNavOpen((pre) => !pre);
    mobileNavDivRef.current.classList.toggle("nav__mobile_icon_close");
  };
  return (
    <nav className="nav__nav section__padding flex__spaceBetween">
      {isMobileNavOpen ? (
        <isMobileNavOpenContext.Provider value={[isMobileNavOpen]}>
          <NavBarMobile />
        </isMobileNavOpenContext.Provider>
      ) : (
        <></>
      )}
      <div className="nav__logo_div">
        <h1>W.</h1>
      </div>
      <div
        ref={mobileNavDivRef}
        onClick={NavMobileClickHandler}
        className="nav__mobile_icon"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav__links_div">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Roadmap</a>
        <a href="#">Showcase</a>
        <a href="#">Team</a>
        <a href="#">Faq</a>
      </div>
      {window.innerWidth <= 790 ? null : (
        <Button
          className="nav__button"
          content="Connect Wallet"
          borderColor="rgb(32, 32, 32)"
          bgc="rgb(32, 32, 32)"
          color="white"
        />
      )}
    </nav>
  );
};

export default NavBar;
