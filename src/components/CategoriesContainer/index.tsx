import React from 'react'
import "./categoriesContainer.scss"
import Category from './Category'

const categories = [
        {name: "Fashion", imageUrl: "/images/categories/fashion.png", amount: 5500},
        {name: "Sports & Fitness", imageUrl: "/images/categories/fitness.png", amount: 15600},
        {name: "Laptops", imageUrl: "/images/categories/laptops.png", amount: 5500},
        {name: "Phones", imageUrl: "/images/categories/phones.png", amount: 5500},
    ]

function TopCategories({cardTitle} : {cardTitle: string}) {
  return (
    <div className='container'>
        <div className="cardHead">
            <h3>{cardTitle}</h3>
            <p>See all</p>
        </div>
        <div className="categories">
            {categories.map((category, index) => {
                return <Category name={category.name} imageUrl={category.imageUrl} amount={category.amount} key={index} />
            })}
        </div>

    </div>
  )
}

export default TopCategories
