import React from "react";
import Button from "../Button/Button";
import Carousle from "./Carousle/Carousle";
import "./Welcome.css";
const Welcome = () => {
  return (
    <section id="About" className="welcome__section  ">
      <div className="welcome__contener  section__padding">
        <div className="welcome__text-white">
          <h3>Welcome To The Weirdos Club.</h3>
          <p className="welcome__subText">
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </p>
          <p className="welcome__desc">
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </p>
          <Button
            bgc="white"
            borderColor="white"
            color="black"
            marginTop="20px"
            content="Join Our Discord"
          />
        </div>
        <Carousle />
      </div>
    </section>
  );
};

export default Welcome;
