import { useEffect , useState } from "react";
import {
  faDocker,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss'
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import Loader from "react-loaders";



const Skills = () => {
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
    <div className="content">
      <h1>
        <AnimateLetters
          letterClass={letterClass}
          classStyle={'tiny5-regular'}
          array={["M" , "y" , " ", " S" , "k" , "i" , "l" , "l" , "s"]}
          idx={15}
        />
      </h1>
      </div>
    <div className="skills">
    <h1>
      <ul className="my-40">
      <li className="developer-tools mx-10 tiny5-regular"> DEVELOPER TOOLS</li> 
      <li className="languages-os mx-20 tiny5-regular"> LANGUAGES & OS </li>
      <li className="robotics-ml mx-10 tiny5-regular"> ROBOTICS & ML </li>
       </ul>
    </h1>
  <div className="stage-cube-cont-languagesos">
    <div className="cubespinner-languagesos">
      <div className="face1">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height="100px" width="70px"/>
      </div>
      <div className="face2">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height="100px" width="70px"/>
      </div>
      <div className="face3">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg" height="150px" width="100px"/>
      </div>
    </div>
  </div>

  <h1>  </h1>

  <div className="stage-cube-cont-roboticsml">
    <div className="cubespinner-roboticsml">
      <div className="face1">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg" height="150px" width="120px"/>
      </div>
      <div className="face2">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg" height="100px" width="70px"/>
      </div>
      <div className="face3">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" height="100px" width="70px"/>
      </div>
      <div className="face4">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg" height="100px" width="70px"/>
      </div>
      <div className="face5">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original-wordmark.svg" height="100px" width="70px"/>
      </div>
      <div className="face6">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gazebo/gazebo-original-wordmark.svg" height="100px" width="70px"/>
      </div>

    </div>
  </div>

  
          
  <h1>  </h1>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faDocker} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>

      </div>

      <Loader type="pacman"/>

    </>
  );
}

export default Skills;
