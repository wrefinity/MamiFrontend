import React from 'react'
import style from './BannerSameDayDelivery.module.scss'

import Image from 'next/image'


// -  /images/top-banner.png -  banner as img 4rm css, use but put btn mak it transparent in banner's btn area

function BannerSameDayDelivery() {
  return (
    // <section className={style['delivery-banner']} rel="quality products banner">
    //   <div>        
    //     <div className={style['delivery-container']} rel="fast delivery">
    //       <div>
    //         <Image className='w-100' src={'/svgs/delivery-icon.svg'} alt="delivery" width='39' height='34' />
    //       </div>
    //       <span>Same day<br/> delivery</span>
    //     </div>

    //     <div className={style['shoe']}>
    //       <Image
    //         className='w-100'
    //         src={'/images/half shoe 1.png'}
    //         alt="nigerian made shoe"
    //         width='211' height='96' />
    //     </div>
    //     <h2>QUALITY NIGERIAN-MADE PRODUCTS YOU CAN TRUST</h2>

    //     <div className={style['bag']}>
    //       <Image
    //         className='w-100'
    //         src={'/images/bag.png'}
    //         alt="nigerian made bag"
    //         width='189' height='96' />
    //     </div>

    //     <div>
    //       <button className={style['shop-btn']}>Shop now
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <section className={style['home-banner']} rel="quality products banner">
      <h2>Same day delivery</h2>

      <h2>QUALITY NIGERIAN-MADE PRODUCTS YOU CAN TRUST</h2>
      
      <button className={style['shop-btn']}>Shop now</button>
    </section>
  )
}

export default BannerSameDayDelivery