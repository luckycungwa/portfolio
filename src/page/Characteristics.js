import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";

const Characteristics = () => {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">SOFT SKILLS</h1>
          {/* navigation bar */}
          <Navbar />
        </div>

        <div className="card-container">
          {/* Background lines */}
          <div className="top-border" />
          <div className="skills-border">
            <div className="skills-card-container">
              <h3>
                Passionately Blending Artistry with Precision in the World of
                Design and Development
              </h3>
              <p className="text">
                I enjoy being part of a team, where ideas flow freely, and
                collective creativity results in remarkable outcomes.
              </p>
            </div>
            <span className="mid-border" />
            <div className="skills-layout">
              <div className="skills-card-container">
                <h3>Effective Communication</h3>
                <p className="text">
                  In the ever-evolving world of technology, adaptability is a
                  crucial skill. I thrive in fast-paced environments, ready to
                  embrace new tools and methodologies to deliver outstanding
                  results.
                </p>
              </div>

              <div className="skills-card-container">
                <h3>Adaptability</h3>
                <p className="text">
                  In the ever-evolving world of technology, adaptability is a
                  crucial skill. I thrive in fast-paced environments, ready to
                  embrace new tools and methodologies to deliver outstanding
                  results.
                </p>
              </div>
              <div className="skills-card-container">
                <h3>Problem-Solving</h3>
                <p className="text">
                  As a developer and designer, problem-solving is second nature
                  to me. I enjoy the challenge of finding creative solutions to
                  complex issues, ensuring that projects run smoothly and
                  efficiently
                </p>
              </div>
              <div className="skills-card-container">
                <h3>Time Management</h3>
                <p className="text">
                  In the world of design and development, time management is
                  essential. I excel in organizing my work, meeting deadlines,
                  and ensuring that projects progress smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-border" />
          <p className="text">
            My journey takes an intriguing turn as I seamlessly blend the world
            of artistry with the precision of technology. With my background in
            graphic design, I bring an artist's eye to the digital landscape.
            Now, I'm venturing into web and mobile app development with a strong
            focus on React for web and React Native for mobile. The result is
            engaging, visually stunning user experiences that strike a
            harmonious balance between artistic expression and technical
            expertise.
          </p>
          {/* <div className="button-group">
            <button className="button-outline">
              Portfolio <FaArrowRight />
            </button>
            <button className="button-outline">
              Let's Work <FaArrowRight />
            </button>
          </div> */}
        </div><div />
      </div>
      
    </>
  );
};

export default Characteristics;
