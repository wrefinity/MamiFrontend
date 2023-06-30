import React from 'react'
import style from './BannerSameDayDelivery.module.scss'

import Image from 'next/image'
import bag from '../../assets/img/bag.png'
import shoe from '../../assets/img/half shoe 1.png'
import deliveryIcon from '../../assets/icons/delivery-icon.svg'
import arrowIcon from '../../assets/icons/arrow-right.svg'


function BannerSameDayDelivery() {
  return (
    <section className={style['delivery-banner']} rel="quality products banner">
      <div>        
        <div className={style['delivery-container']} rel="fast delivery">
          <div>
            <Image className='w-100' src={deliveryIcon} alt="delivery"/>
          </div>
          <span>Same day<br/> delivery</span>
        </div>

        <div className={style['shoe']}>
          <Image
            className='w-100'
            src={shoe}
            alt="nigerian made shoe"/>
        </div>
        <h2>QUALITY NIGERIAN-MADE PRODUCTS YOU CAN TRUST</h2>

        <div className={style['bag']}>
          <Image
            className='w-100'
            src={bag}
            alt="nigerian made bag"/>
        </div>

        <div>
          <button className={style['shop-container']}>Shop now <div><Image className='w-100' src={arrowIcon} alt="shop button" /></div></button>
        </div>
      </div>

    </section>
  )
}

export default BannerSameDayDelivery