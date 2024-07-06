import React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  function hoverAnimation() {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }

  useEffect(() => {
    hoverAnimation();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2yq73y9",
        "template_rn8cqis",
        form.current,
        "9dGQI9HHCP0ttI0NK"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  const position = [28.7500, 77.1175]

  return (
    <>
      <div className="container">
        <div className="text-content-contact">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              classStyle={"tiny5-regular"}
              array={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p className="my-10 playwrite-gb-s-descriptionText">
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="playwrite-gb-s-descriptionText">
                <li className="split-width">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="split-width">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li className="email-content">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className="email-content">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button-contact"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Hriday Bhardwaj,
          <br />
          Delhi , India
          <br />
          +91 9289708400
          <br />
          <span>bhardwajhriday1001@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;
