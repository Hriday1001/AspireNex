import React from "react";
import "./index.scss";
import { useRef, useState, useEffect } from "react";
import projects from "../../assets/projects";
import project1 from "../../assets/project1.png";
import logo2 from "../../assets/logo2.png";
import project3 from "../../assets/project3.png";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import {Loader} from "react-loaders";

const images = [project1, logo2, project3];

function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");

  function hoverAnimation() {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }

  useEffect(() => {
    hoverAnimation();
  }, []);

  let ref = useRef(-1);
  return (
    <>
    <div className="animations">
     <h1>
          <AnimateLetters
            letterClass={letterClass}
            classStyle={"tiny5-regular"}
            array={["M", "y", " ", "P", "r", "o", "j", "e ", "c", "t" , "s"]}
            idx={15}
          />
        </h1>
     </div>
      <div className="projects-container">
       

        <div className="images-container">
          {projects.projects.map((port, idx) => {
            if (ref.current == 2) {
              ref.current = -1;
            }
            ref.current = ref.current + 1;
            return (
              <div className="image-box" key={idx}>
                <img
                  src={images[ref.current]}
                  className="portfolio-image"
                  alt="portfolio"
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button className="btn" onClick={() => window.open(port.url)}>
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Projects;
