import Link from 'next/link';
import React from 'react'
import style from './NavBar.module.scss'

import Image from 'next/image';
import allCateIcon from '../../assets/icons/all-categories.svg'

function NavBar() {
  return (
    <nav className={style['navbar']}>
      <div>
      <Link href="" className={style['all-categories']}>
        <div>
          <Image src={allCateIcon} alt='' />
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
  );
}

export default NavBar