import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      {/* Navigationbar */}
      <div>
        <div className="container">
          <div className="intro-section">
            <div className="intro-text">
              <h3 className="sub-title">Hi. It's me,</h3>

              <h1 className="title">
                Lucky <br /> Cungwa
              </h1>
              <p className="sub-title">
                Your versatile{" "}
                <b>graphic designer, mobile & web app developer. </b>
              </p>
              <p className="sub-title">
                I specializing in building high-performance web and mobile
                applications. Proficient in UI/UX design when my programming
                skills blends with my graphic design skillset.
              </p>
              <div className="button-group">
                <button
                  className="button"
                  // navigate to about page
                  onClick={() => navigate("/about")}
                >
                  Get in touch
                </button>
                <button
                  className="button-outline"
                  onClick={() => alert("Downloading CV")}
                >
                  Download CV
                </button>
              </div>
            </div>

            <div className="intro-image">
              <img className="image" src="./man.jpg" alt="lucky" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
