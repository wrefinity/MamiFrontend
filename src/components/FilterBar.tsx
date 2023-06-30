import React from 'react'
import style from '@/components/FilterBar.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import mamiLogo from '../../assets/img/Mami_Logo-removebg-preview 1.png'
import searchIcon from '../../assets/icons/search.svg'


function FilterBar() {
  return (
  <section className={style['search-bar'] + ' outline-it'} rel="search bar">
    <div className='outline-it'>
      <div>
        <Image src={mamiLogo} alt="MamiHub Brand logo" />
      </div>
        <Link href='#'>sell on MamiHub</Link>
        
      <div>
        <input type="text" />
        <button>
          <Image src={searchIcon} alt="" />
        </button>
      </div>
        
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  )
}

export default FilterBar