import './index.scss'

import React from 'react'

const AnimateLetters = ({letterClass,classStyle,array,idx}) => {
  return (
    <span>
      {array.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx} ${classStyle}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimateLetters
