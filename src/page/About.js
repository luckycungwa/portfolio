import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">ABOUT ME</h1>
          {/* navigation bar */}
          <Navbar />
        </div>
        <div className="about-section">
          <p>
            Hello, <b>I'm Lucky Cungwa</b>, a South African-based individual who
            is on an exciting journey of merging <b>technology & design.</b>
          </p>

          <p>
            With a deep love for crafting engaging and user-centric web and
            mobile applications. I specializing in building high-performance web
            and mobile applications and creating visual aesthetically pleasing
            designs using <b>colours</b>, shapes and typography. Proficient in
            UI/UX design when my programming skills blend with my graphic design
            skillset.
          </p>

          <p>
            My story begins with a deep-rooted passion for creative expression,
            especially in the realm of graphic design. For three years, I've had
            the privilege of working closely with clients, breathing life into
            their visions through captivating logos and various graphic design
            materials.
          </p>
          <p>
            {" "}
            Committed to creating exceptional user experiences and staying
            updated with industry trends.
          </p>
          <p>
            My journey takes an intriguing turn as I seamlessly blend the world
            of artistry with the precision of technology. With my background in
            graphic design, I bring an artist's eye to the digital landscape.
            Now, I'm venturing into web and mobile app development with a strong
            focus on React for web and React Native for mobile. The result is
            engaging, visually stunning user experiences that strike a
            harmonious balance between artistic expression and technical
            expertise.
          </p>
        </div>
        <div className="button-group">
          <button className="button">Get in touch</button>
          <button className="button">Get in touch</button>
        </div>
      </div>
    </>
  );
};

export default About;
