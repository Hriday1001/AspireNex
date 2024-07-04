import React from "react";
import './index.scss'
import { useState, useEffect } from "react";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import Loader from 'react-loaders'

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
    <div className="container">
      <div className="text-content">
      <h1>
        <AnimateLetters
          letterClass={letterClass}
          classStyle={'tiny5-regular'}
          array={["A", "b", "o", "u", "t", " ", "m", "e"]}
          idx={15}
        />
      </h1>

      <h2>
      <p>
      <span>I&apos;m </span>
        a very ambitious front-end developer looking for a role in an
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <br />
      <p>
        <span>I&apos;m </span>
        quiet confident, naturally curious, and perpetually working on
        improving my chops one design problem at a time.
      </p>
      <br />
      <p>
        If I need to define myself in one sentence that would be a family
        person, father of a beautiful daughter, a sports fanatic, photography
        enthusiast, and tech-obsessed!!!
      </p>
      </h2>

      </div>
    </div>
    <Loader></Loader>
    </>
  );
}

export default About;
