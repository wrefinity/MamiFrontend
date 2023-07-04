import React from 'react'
import "./promotionBanner.scss"
import Button from '@/components/Atoms/Button'
import Image from 'next/image'
import Product from '@/components/ProductsContainer/Product'

function PromotionBanner() {

    const products = [
        {name: "Vintage T-shirts", imageUrl: "/images/product1.png", amount: 5500},
        {name: "Quality Loafers", imageUrl: "/images/product2.png", amount: 15600},
        {name: "Vintage T-shirts", imageUrl: "/images/product3.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product4.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product5.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product6.png", amount: 5500}
    ]
  return (
    <div className='promotionBannerContainer'>
        <div className="promotionDetails">
            <h1>Save up to ₦5,000</h1>
            <p>on selected discount deals</p>
            <Button text='Shop now' />
            <div className="bannerImageContainer">
                <Image src={"/images/banner-laptops.png"} alt='Promotion' fill style={{objectFit: "contain"}} />
            </div>
        </div>
        <div className="promotionScroll">
            {products.map((e, i)=>{
                return(
                    <Product name={e.name} imageUrl={e.imageUrl} amount={e.amount} />
                )
            })}
        </div>
    </div>
  )
}

export default PromotionBanner
