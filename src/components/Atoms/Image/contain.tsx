import React from 'react'
import "./image.scss"
import Image from "next/image"

function ContainImage({src, alt} : {src: string, alt: string}) {
  return (
    <Image src={src} alt={alt} fill className='mamiImage' />
  )
}

export default ContainImage
