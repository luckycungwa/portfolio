import React from "react";

const Home = () => {
  return (
    <>
      {/* Navigationbar */}
      <div>
        <div className="container">
          <div className="intro-section">
            <h3 className="sub-title">Hi. It's me,</h3>
            
            <h1 className="title">Lucky <br/> Cungwa</h1>
            <p className="sub-title">
              Your versatile <b>graphic designer, mobile & web app developer. </b><br/>
              I specializing in building high-performance web and mobile
              applications. Proficient in UI/UX design when my programming
              skills blends with my graphic design skillset.
            </p>
            <button className="button">Get in touch</button>
          </div>

          <div className ="intro-section">
            <img className ="image" src="./man.jpg" alt="lucky" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
