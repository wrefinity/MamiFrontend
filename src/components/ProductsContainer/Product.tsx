import React from 'react'
import Image from "next/image"
import "./product.scss"

function Product({imageUrl, name, amount} : {imageUrl: string, name: string, amount: number}) {

// let formatting_options = {
//    style: "currency",
//   //  currency: "NGN",
//    minimumFractionDigits: 0,
// }

const f = new Intl.NumberFormat("en-us")
 
  return (
    <div className="product">
        <div className="productImageContainer">
            <Image src={imageUrl} alt='Product' fill style={{objectFit: "cover", objectPosition: "center"}} />
        </div>
        <div className="productDetails">
            <h4>{name}</h4>
            <h3>₦ {f.format(amount)}</h3>
        </div>
    </div>
  )
}

export default Product
