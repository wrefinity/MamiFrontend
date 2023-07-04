import React from 'react'
import "./productContainer.scss"
import Product from './Product'

const products = [
        {name: "Vintage T-shirts", imageUrl: "/images/product1.png", amount: 5500},
        {name: "Quality Loafers", imageUrl: "/images/product2.png", amount: 15600},
        {name: "Vintage T-shirts", imageUrl: "/images/product3.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product4.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product5.png", amount: 5500},
        {name: "Vintage T-shirts", imageUrl: "/images/product6.png", amount: 5500}
    ]

function ProductsContainer({cardTitle, newArrivals, blackCulture} : {cardTitle: string, newArrivals?: boolean, blackCulture?: boolean}) {
  return (
    <div className='container'>
      <div className={blackCulture ? "blackCulture cardHead" : "cardHead"}>
        <h3>{cardTitle}</h3>
        <p>See all &#8250;</p>
      </div>
      <div className="products">
        {products.map((product, index) => {
            return <Product name={product.name} imageUrl={product.imageUrl} amount={product.amount} key={index} />
        })}
      </div>

      {newArrivals && <p className='newTag'>New</p>}
    </div>
  )
}

export default ProductsContainer
