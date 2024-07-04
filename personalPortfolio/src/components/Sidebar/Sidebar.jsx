import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faHome , faContactBook , faPerson, faWrench, faMortarBoard } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faGithub , faTwitter } from '@fortawesome/free-brands-svg-icons'


function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link to="/" className="logo">
                        <img
                            src={logo1}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
        </Link>
        <nav>
            <ol>
                <li>
                    <NavLink to ="/"
                        className={({isActive}) => `home-link ${isActive ? "bg-white active" : ""}`}
                    >
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/about"
                        className={({isActive}) => `about-link ${isActive ? "bg-white active" : ""}`}
                        activeclassname = "active"
                    >
                        <FontAwesomeIcon icon={faPerson} color="#4d4d4e"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/contact"
                        className={({isActive}) => `contact-link ${isActive ? "bg-white active" : ""}`}
                        activeclassname = "active"
                    >
                        <FontAwesomeIcon icon={faContactBook} color="#4d4d4e"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/skills"
                        className={({isActive}) => `skills-link ${isActive ? "bg-white active" : ""}`}
                        activeclassname = "active"
                    >
                        <FontAwesomeIcon icon={faMortarBoard} color="#4d4d4e"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/projects/1"
                        className={({isActive}) => `projects-link ${isActive ? "bg-white active" : ""}`}
                        activeclassname = "active"
                    >
                        <FontAwesomeIcon icon={faWrench} color="#4d4d4e"/>
                    </NavLink>
                </li>
            </ol>
            
        </nav>

        <ul>

            <li>
                <a href="https://github.com/Hriday1001" target='_blank'>
                <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
                />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/hriday-bhardwaj-b2767822b/" target='_blank'>
                <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
                />
                </a>
            </li>

            <li>
                <a href="https://twitter.com/VampWeeknd63" target='_blank'>
                <FontAwesomeIcon
                icon={faTwitter}
                color="#4d4d4e"
                className="anchor-icon"
                />
                </a>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar
