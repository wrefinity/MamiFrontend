import React from 'react'
import style from '@/components/FilterBar.module.scss'
import Link from 'next/link'

import Image from 'next/image'
// import mamiLogo from '/images/Mami_Logo-removebg-preview 1.png'
// import searchIcon from '/svgs/search.svg'
// import help from '/svgs/help-support.svg'
// import angleDown from '/svgs/down-angle.svg'
// import account from '/svgs/Account Icon.svg'
// import cart from '/svgs/cart.svg'



function FilterBar() {
  return (
  <section className={style['search-bar']} rel="search bar">
    <div>
      <div className={style.logo}>
          <Image className='w-100' src={'/images/Mami_Logo-removebg-preview 1.png'} alt="MamiHub Brand logo" width='128' height='61' />
          {/* fill style={{objectFit: "contain"}} */}
      </div>
        
      <div className={style.sell}>
        <Link href='#'>sell on MamiHub</Link>
        <div className={style['search-container']}>
          <input type="text" placeholder='Search for products, stores and categories' />
          <button>
            <Image src={'/svgs/search.svg'} alt="" width='26' height='26' />
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
          Account
        </Link>
        <Link href=''>
          <div>
            <Image className='w-100' src={'/svgs/cart.svg'} alt="" width='20' height='20' />
          </div>
          Cart
        </Link>
      </nav>
    </div>
  </section>
  )
}

export default FilterBar