import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>ABOUT</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="An image about me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I'm Zhouqian, a passionate software developer currently based in Los
            Angeles. I received my B.S degree from Case Western Reserve
            University and I am getting my master's degree in University of
            Southern California majoring in Computer Science.
          </p>

          <p>
            Outside of programming, I enjoy movies, snowboarding and playing
            around with my camera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
