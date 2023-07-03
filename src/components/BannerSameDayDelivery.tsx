import React from 'react'
import style from './BannerSameDayDelivery.module.scss'

import Image from 'next/image'


function BannerSameDayDelivery() {
  return (
    <section className={style['delivery-banner']} rel="quality products banner">
      <div>        
        <div className={style['delivery-container']} rel="fast delivery">
          <div>
            <Image className='w-100' src={'/svgs/delivery-icon.svg'} alt="delivery" width='39' height='34' />
          </div>
          <span>Same day<br/> delivery</span>
        </div>

        <div className={style['shoe']}>
          <Image
            className='w-100'
            src={'/images/half shoe 1.png'}
            alt="nigerian made shoe"
            width='211' height='96' />
        </div>
        <h2>QUALITY NIGERIAN-MADE PRODUCTS YOU CAN TRUST</h2>

        <div className={style['bag']}>
          <Image
            className='w-100'
            src={'/images/bag.png'}
            alt="nigerian made bag"
            width='189' height='96' />
        </div>

        <div>
          <button className={style['shop-btn']}>Shop now
            <div><Image className='w-100' src={'/svgs/arrow-right.svg'} alt="shop button" width='24' height='21' /></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BannerSameDayDelivery