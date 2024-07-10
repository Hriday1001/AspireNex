import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faHome,
  faContactBook,
  faPerson,
  faWrench,
  faMortarBoard,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link to="/" className="logo" onClick={() => setShowNav(false)}>
        <img src={logo1} className="mr-3 h-12" alt="Logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <ol>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `home-link ${isActive ? "bg-white active" : ""}`
              }
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `about-link ${isActive ? "bg-white active" : ""}`
              }
              onClick={() => setShowNav(false)}
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faPerson} color="#4d4d4e" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `skills-link ${isActive ? "bg-white active" : ""}`
              }
              onClick={() => setShowNav(false)}
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faMortarBoard} color="#4d4d4e" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects/1"
              className={({ isActive }) =>
                `projects-link ${isActive ? "bg-white active" : ""}`
              }
              onClick={() => setShowNav(false)}
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faWrench} color="#4d4d4e" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `contact-link ${isActive ? "bg-white active" : ""}`
              }
              onClick={() => setShowNav(false)}
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faContactBook} color="#4d4d4e" />
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon
              onClick={() => setShowNav(false)}
              icon={faClose}
              color="#ffd700"
              size="3x"
              className="close-icon"
            />
          </li>
        </ol>
      </nav>

      <ul>
        <li>
          <a href="https://github.com/Hriday1001" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/hriday-bhardwaj-b2767822b/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/VampWeeknd63" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="menu-icon"
      />
    </div>
  );
}

export default Sidebar;
