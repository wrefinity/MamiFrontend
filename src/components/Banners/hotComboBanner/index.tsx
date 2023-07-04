import Image from 'next/image'
import React from 'react'
import "./hotComboBanner.scss"
import Button from '@/components/Atoms/Button'

function HotComboBanner() {
  return (
    <div className='hotComboContainer'>
      <div className="title">
        <h2>Hot Combo Deals</h2>
      </div>
      <div className="details">
        <div className="hotComboimageContainer">
            <Image src={"/images/bannerDrinks.png"} alt='Combo' fill style={{objectFit: "contain", objectPosition: "left"}} />
        </div>

        <div className="hotComboDescription">
            <p>Cheap combo deals from N4,000 only for today!</p>
        </div>
        <div className="comboButton">
            <Button text='Shop now' />
        </div>
      </div>

    </div>
  )
}

export default HotComboBanner
