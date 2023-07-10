import React from 'react'
import style from '@/components/FilterBar.module.scss'
import Link from 'next/link'

import Image from 'next/image'



function FilterBar() {
  return (
  <section className={style['search-bar']} rel="search bar">
    <div>
      <div className={style.logo}>
        <div>
          <Image src={'svgs/all-categories.svg'} alt='' width='26' height='20'/>
        </div>
        <div>
          <Image src={'/images/Mami_Logo-removebg-preview 1.png'} alt="MamiHub Brand logo" width='200' height='95' /> 
        </div>
      </div>
        
      <div className={style.sell}>
        <Link href='#'>sell on MamiHub</Link>
        <div className={style['search-container']}>
          <input type="text" placeholder='Search for products, stores and categories' />
          <button>
            <Image src={'/svgs/search.svg'} alt="" width='26' height='26' />
            <Image src={'/svgs/search-black.svg'} alt="" width='26' height='26' />
          </button>
        </div>    
      </div>
        
      <nav className={style['filter-nav']}>
        <button>
          <div>
            <Image className='w-100' src={'/svgs/help-support.svg'} alt="" width='24' height='24' />
          </div>
            Help
          <div>
            <Image className='w-100' src={'/svgs/down-angle.svg'} alt="" width='24' height='24' />
          </div>
        </button> 
        <Link href=''>
          <div>
            <Image className='w-100' src={'/svgs/Account Icon.svg'} alt="" width='12' height='18' />
          </div>
          <span>Account</span>
        </Link>
        <Link href=''>
          <div>
            <Image className='w-100' src={'/svgs/cart.svg'} alt="" width='20' height='20' />
          </div>
          <span>Cart</span>
        </Link>
      </nav>
    </div>
  </section>
  )
}

export default FilterBar