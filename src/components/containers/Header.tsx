import React from 'react'
import BannerSameDayDelivery from '@/components/BannerSameDayDelivery'
import NavBar from '@/components/NavBar'
import FilterBar from '@/components/FilterBar'
import styles from '@/components/containers/Header.module.scss'


function Header() {
  return (
  <div className={styles['container-fluid']}>

      <header className={styles['page-header']}>
        <BannerSameDayDelivery />
        <FilterBar/>
        <NavBar/>
      </header>
  </div>
  )
}

export default Header