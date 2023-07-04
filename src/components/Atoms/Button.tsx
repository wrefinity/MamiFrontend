import React from 'react'
import "./button.scss"
import Image from 'next/image'

function Button({text}: {text: string}) {
  return (
    <button>
      {text}
      <div className="svgContainer">
        <Image src={"/svgs/arrow-right.svg"} alt='arrowRight' fill style={{objectFit: "contain", objectPosition: "center"}} />
      </div>
    </button>
  )
}

export default Button
