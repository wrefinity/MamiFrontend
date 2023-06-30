import React from 'react'
import style from '@/components/FilterBar.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import mamiLogo from '../../assets/img/Mami_Logo-removebg-preview 1.png'
import searchIcon from '../../assets/icons/search.svg'
import help from '../../assets/icons/help-support.svg'
import angleDown from '../../assets/icons/down-angle.svg'
import account from '../../assets/icons/Account Icon.svg'
import cart from '../../assets/icons/cart.svg'



function FilterBar() {
  return (
  <section className={style['search-bar'] + ' outline-it'} rel="search bar">
    <div className='outline-it'>
      <div className={style.logo}>
        <Image className='w-100' src={mamiLogo} alt="MamiHub Brand logo" />
      </div>
        
      <div className={style.sell}>
        <Link href='#'>sell on MamiHub</Link>
        <div className={style['search-container']}>
          <input type="text" />
          <button>
            <Image src={searchIcon} alt="" />
          </button>
        </div>    
      </div>
        
      <nav className={style['filter-nav']}>
        <button>
          <div>
            <Image className='w-100' src={help} alt="" />
          </div>
            Help
          <div>
            <Image className='w-100' src={angleDown} alt="" />
          </div>
        </button> 
        <Link href=''>
          <div>
            <Image className='w-100' src={account} alt="" />
          </div>
          Account
        </Link>
        <Link href=''>
          <div>
            <Image className='w-100' src={cart} alt="" />
          </div>
          Cart
        </Link>
      </nav>
    </div>
  </section>
  )
}

export default FilterBar