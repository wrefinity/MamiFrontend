import React from 'react'
import Image from "next/image"
import Link from 'next/link'

function Category({imageUrl, name, amount} : {imageUrl: string, name: string, amount: number}) {
 
  return (
    <div className="category">
        <div className="categoryImageContainer">
            <Image src={imageUrl} alt={name} fill style={{objectFit: "cover", objectPosition: "center"}} />
        </div>
        <div className="categoryDetails">
            <h3>{name}</h3>
            <h4>Up to 50% off</h4>
            <Link href={"#"}>
                <button>Shop now → </button>
            </Link>
        </div>
    </div>
  )
}

export default Category
