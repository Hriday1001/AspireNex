import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimateLetters from '../AnimateLetters/AnimateLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const nameArray = ['H' , 'r' , 'i' , 'd' , 'a' , 'y']

  const [letterClass , setLetterClass] = useState('text-animate')

  function hoverAnimation(){
    return setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },2000)
  }

  useEffect(() => {
    hoverAnimation();
  }, [])

  return (
    <>
      <div className="container">
        <div className="text-content">
          <h1>
            <span className={`${letterClass} tiny5-regular`}>H</span>
            <span className={`${letterClass} _12 tiny5-regular`}>i,</span>
            <br />
            <span className={`${letterClass} _13 tiny5-regular`}>I&apos;m</span>
            <span className={`${letterClass} _14 tiny5-regular`}> </span>
            <AnimateLetters 
              letterClass={letterClass}
              classStyle={'tiny5-regular'}
              array={nameArray}
              idx={15}
            />
          </h1>
          <h2 className='tiny5-regular'>Full Stack Developer / Robotics and ML enthusiast / Bollywood fan {'<3'}</h2>
          <Link to="/contact" className="flat-button">
          <FontAwesomeIcon
                icon={faInbox}
                className='mx-5'
                />
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
      </div>
    </>
  )
}

export default Home
