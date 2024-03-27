import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const downloadLink = () => {
    "https://drive.google.com/file/d/1FyczK09ccjvFLI4TQuu4Lha5KcvtI_Ji/view?usp=drive_link";
  };

  // download cv pdf from https://drive.google.com/file/d/1FyczK09ccjvFLI4TQuu4Lha5KcvtI_Ji/view?usp=drive_link

  const downloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1FyczK09ccjvFLI4TQuu4Lha5KcvtI_Ji/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <>
      {/* Navigationbar */}
      <div>
        <div className="container">
          <div className="intro-section">
            <div>
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
                  <button className="button-outline" onClick={downloadCV}>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img className="image" src="./main.png" alt="lucky" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
