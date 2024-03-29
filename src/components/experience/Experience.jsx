import React from "react";
import "./experience.css";
import { FiTool } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills & Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Swift</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Django</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <FiTool className="experience__details-icon" />
              <div>
                <h4>Golang</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
