import React from 'react'
import Image from "next/image"

function Product({imageUrl, name, amount} : {imageUrl: string, name: string, amount: number}) {

let formatting_options = {
   style: "currency",
   currency: "NGN",
   minimumFractionDigits: 2,
}
 
  return (
    <div className="product">
        <div className="productImageContainer">
            <Image src={imageUrl} alt='Product' fill style={{objectFit: "cover", objectPosition: "center"}} />
        </div>
        <div className="productDetails">
            <h4>{name}</h4>
            <h3>{amount.toLocaleString( 'en-US', formatting_options )}</h3>
        </div>
    </div>
  )
}

export default Product
