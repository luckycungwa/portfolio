import React from "react";
import Navbar from "../components/Navbar";
// icons
import { MdCall, MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Tooltip } from "@mui/material";

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
          <p className="text">
            Hello, <b>I'm Lucky Cungwa</b>, a South African-based individual who
            is on an exciting journey of merging <b>technology & design.</b>
          </p>

          <p className="text">
            With a deep love for crafting engaging and user-centric web and
            mobile applications. I specializing in building high-performance web
            and mobile applications and creating visual aesthetically pleasing
            designs using <b>colours</b>, shapes and typography. Proficient in
            front-end development when my programming skills blend with my graphic design
            skillset.
          </p>

          <p className="text">
            My story begins with a deep-rooted passion for creative expression,
            especially in the realm of graphic design. For three years, I've had
            the privilege of working closely with clients, breathing life into
            their visions through captivating logos, flyers and various graphic design
            materials.
          </p>
         
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
           <p className="text">
            {" "}
            Committed to creating exceptional user experiences and staying
            updated with industry trends.<b> Let's connect!</b>
          </p>
          <div className="button-group">
          <Tooltip title="074 264 9713" defaultWidth={400}><button className="button-outline" onClick={() => window.open("074 264 9713")}> <MdCall/>Call</button></Tooltip>
          <Tooltip title="cungwalucky@gmailcom" defaultWidth={400}><button className="button-outline" onClick={() => window.open("cungwalucky@gmailcom")}> <MdOutlineMailOutline/>E-mail</button></Tooltip>
          <Tooltip title="luckycungwa" defaultWidth={400}><button className="button-outline" onClick={() => window.open("https://www.linkedin.com/in/luckycungwa/")}> <FaLinkedinIn/>LinkedIn</button></Tooltip>
          <Tooltip title="luckycungwa" defaultWidth={400}><button className="button-outline" onClick={() => window.open("https://github.com/luckycungwa")}> <FaGithub /> Github</button></Tooltip>
          
         
          
        </div>
        </div>
        <div/>
       
      </div>
    </>
  );
};

export default About;
