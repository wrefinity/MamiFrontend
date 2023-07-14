import React from 'react'
import "./authoption.scss"
import ContainImage from '../Atoms/Image/contain'

function AuthOption({image, text} : {image: string, text: string}) {
  return (
    <button>
      <div className="authLogo">
        <ContainImage src={image} alt={text}  />
      </div>
      <p>{text}</p>
    </button>
  )
}

export default AuthOption
