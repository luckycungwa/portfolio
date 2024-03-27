import React from "react";
import Navbar from "../components/Navbar";
import PortfolioGrid from "../components/PortfolioGrid";
import BackButton from "../components/BackButton";

const Experience = () => {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">PORTFOLIO</h1>
          <BackButton />
        </div>
        <div className="card-container">
        <div>
          <PortfolioGrid/>
        </div>
          <p className="sub-text">
          I'm always open to connecting, discussing potential collaborations, or exploring exciting job opportunities. If you share my passion for tech, design, or simply want to chat about art, music, or entertainment, please don't hesitate to reach out. Let's create, innovate, and make a difference together!
          </p>

          
          
        </div>
        <div/>
       
      </div>
    </>
  );
};

export default Experience;
