import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="title">
          <h1>Hi, I'm</h1>
          <h1>
            <span className="special_title">Z</span>houqian (
            <span className="special_title">J</span>ack)
          </h1>
          <h1 className="text-light">software developer</h1>
        </div>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
