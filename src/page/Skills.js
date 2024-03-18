import React from "react";
import { CardList } from "../components/CardList";

const Skills = () => {
  return (
    <>
      <div>
        <h1>TECH SKILLS</h1>
        {/* navigation bar */}
      </div>
      <div className="card-container">

      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      </div>
     <div>
      <p>My journey takes an intriguing turn as I seamlessly blend the world of artistry with the precision of technology. With my background in graphic design, I bring an artist's eye to the digital landscape. Now, I'm venturing into web and mobile app development with a strong focus on React for web and React Native for mobile. The result is engaging, visually stunning user experiences that strike a harmonious balance between artistic expression and technical expertise.</p>
      </div>
        
      <div>
        <button className="button">Get in touch</button>
        <button className="button">Get in touch</button>
      </div>
    </>
  );
};

export default Skills;
