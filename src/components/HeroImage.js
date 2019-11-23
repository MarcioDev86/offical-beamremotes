import React from "react";
import beamLogoWhite from "../images/beam_logo_white.png";
import Fade from "react-reveal/Fade";

export default function HeroImage(props) {
  return (
    <div className={props.bot === true ? "parallax-bot" : "parallax"}>
      <Fade top>
        <h1 className={props.bot === true ? "fade-bot" : "fade"}>
          <img src={beamLogoWhite} alt="logo-white" className="logo-white" />
        </h1>
      </Fade>
    </div>
  );
}
