import React from "react";
import './index.scss'
import { useState, useEffect } from "react";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import Loader from 'react-loaders';
import CustomizedTimeline from "../CustomizedTimeline/CustomizedTimeline";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  function hoverAnimation() {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }

  useEffect(() => {
    hoverAnimation();
  }, []);

  return (
    <>
    <div className="about-container">
      <div className="text-content">
      <h1>
        <AnimateLetters
          letterClass={letterClass}
          classStyle={'tiny5-regular'}
          array={["A", "b", "o", "u", "t", " ", "m", "e"]}
          idx={15}
        />
      </h1>

      <h2 className="playwrite-gb-s-descriptionText">
      <p>
      <span>I&apos;m </span>
       currently pursuing Software Engineering at Delhi Technological University, where I have gained hands-on experience in web development , machine learning , robotics and related fields. .Through various projects and coursework, I have honed my skills in these fields and am on the lookout for opportunities to further improve my development skills.
      </p>
      <br />
      <p>
        Additionally, I have a strong foundation in programming languages like C++ , Python, Javascript that enables me to quickly grasp new concepts in associated fields. I am eager to apply my skills to real-world projects, collaborate with talented professionals, and continue learning and growing in these domains.

      </p>
      <br />
      <p>
      I am confident that my background, skills, and enthusiasm make me shine amongst others as a strong candidate. I am eager to contribute to organisations and learn from the valuable experiences offered by them.
      </p>
      </h2>

      </div>
      <div className="timeline-container">
        <CustomizedTimeline/> 
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
}

export default About;
