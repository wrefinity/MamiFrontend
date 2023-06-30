import React from 'react'
import "./flashSalesContainer.scss"
import Product from '../ProductsContainer/Product'

const products = [
        {name: "Vintage T-shirts", imageUrl: "/images/product1.png", amount: 5500},
        {name: "Quality Loafers", imageUrl: "/images/product2.png", amount: 15600},
        {name: "Vintage T-shirts", imageUrl: "/images/product3.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product4.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product5.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product6.png", amount: 5500}
    ]

function FlashSalesContainer({cardTitle} : {cardTitle: string}) {
  return (
    <div className="coloredContainer">
        <div className='container'>
            <div className="cardHead">
                <h2>{cardTitle}</h2>
                <h3>03h:15m:5s left</h3>
                <p>See all &#8250;</p>
            </div>
            <div className="products">
                {products.map((product, index) => {
                    return <Product name={product.name} imageUrl={product.imageUrl} amount={product.amount} key={index} />
                })}
            </div>
            <div className="products">
                {products.map((product, index) => {
                    return <Product name={product.name} imageUrl={product.imageUrl} amount={product.amount} key={index} />
                })}
            </div>
        </div>

    </div>
  )
}

export default FlashSalesContainer
