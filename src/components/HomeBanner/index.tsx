import React from 'react'
import "./homebanner.scss"
import Image from 'next/image'

function HomeBanner() {
  return (
    <div className="homeBanner">
      <div className="carousel">
        <h1>Carousel</h1>
        <p>Waiting for final design </p>
      </div>
      <div className="sideImages">
        <div className="sideImageContainer">
          <Image src={"/images/sideBannerImg.png"} alt='Same Day Delivery' fill style={{objectFit: "cover"}} />
        </div>
        <div className="sideImageContainer">
          <Image src={"/images/sideBannerImg.png"} alt='Same Day Delivery' fill style={{objectFit: "cover"}} />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
