import Link from 'next/link';
import React from 'react'
import style from './NavBar.module.scss'

import Image from 'next/image';
// import allCateIcon from 'svgs/all-categories.svg'

function NavBar() {
  return (
    <>
    <nav className={style['navbar']}>
      <div>
      <Link href="" className={style['all-categories']}>
        <div>
          <Image src={'svgs/all-categories.svg'} alt='' width='26' height='20'/>
        </div>
      All Categories</Link>
      <Link href="">Furnitures</Link>
      <Link href="">Phones</Link>
      <Link href="">Laptops</Link>
      <Link href="">Fashion</Link>
      <Link href="">Baby & Toys</Link>
      <Link href="">Gaming</Link>
      <Link href="">Sports & Fitness</Link>
      <Link href="">Home & Office</Link>
      <Link href="">Health & Beauty</Link>
      <Link href="">SuperMarkets</Link>
      <Link href="">SuperMarkets</Link>
        
      </div>
    </nav>
      
    <nav className={style['navbar-mobile']}>
      <div>
      <Link href="">
        <div>
          <Image src={'/svgs/all-cate-mobile.svg'} alt='' width='26' height='20'/>
        </div>
      All</Link>

      <Link href="">
        <div>
       <Image src={'/svgs/phone.svg'} alt='' width='26' height='20'/>
        </div>
      Phones</Link>

      <Link href="">
        <div>
        <Image src={'/svgs/fashion.svg'} alt='' width='26' height='20'/>
        </div>
      Fashion</Link>

      <Link href="">
        <div>
        <Image src={'/svgs/laptop.svg'} alt='' width='26' height='20'/>
        </div>
      Laptops</Link>

      <Link href="">
        <div>
       <Image src={'/svgs/sell-tag.svg'} alt='' width='26' height='20'/>
        </div>
      Sell</Link>
        
      </div>
    </nav>
    </>
  );
}

export default NavBar