import React from "react";
import { CardList } from "../components/CardList";
import Navbar from "../components/Navbar";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>TECH SKILLS</h1>
          {/* navigation bar */}
        </div>
        <Navbar />
        <div className="card-container">
          <div className="card">
          <div className="card-blur"/>
            <h2 className="card-header">WEB DEV.</h2>
            
            <img src="/images/web.jpg" alt="web" className="card-image"/>
          </div>
          <div className="card">
          <div className="card-blur"/>
            <h2 className="card-header">APP DEV.</h2>
            
            <img src="/images/mobile.jpg" alt="web" className="card-image"/>
          </div>
          <div className="card">
          <div className="card-blur"/>
            <h2 className="card-header">UI/UX</h2>
            
            <img src="/images/ui.jpg" alt="web" className="card-image"/>
          </div>
          <div className="card">
          <div className="card-blur"/>
            <h2 className="card-header">DESIGNs</h2>
            <img src="/images/design.jpg" alt="web" className="card-image"/>
          </div>

          <div className="">
            <p className="sub-text">
              In my technical toolbox, I wield a range of skills, including web
              and mobile development, state management with Redux, seamless API
              integration, responsive design, CSS-in-JS methodologies, and code
              optimization for top-notch performance. I also embrace
              collaboration tools like Git and agile methodologies to work
              effectively in teams.
            </p>
          </div>
        </div>

        <div className="button-group">
          <button className="button">Get in touch</button>
          <button className="button">Get in touch</button>
        </div>
      </div>
    </>
  );
};

export default Skills;
