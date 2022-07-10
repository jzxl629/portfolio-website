import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <AiOutlineCode />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default Nav;
