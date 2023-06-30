import Image from 'next/image'
import styles from '@/styles/home.module.scss'
import BannerSameDayDelivery from '@/components/BannerSameDayDelivery'
import NavBar from '@/components/NavBar'
import FilterBar from '@/components/FilterBar'

export default function Home() {
  return (
  <>
  <div className={styles['container-fluid'] + " border-itk" }>

    <header className="border-itk page-header">
      <BannerSameDayDelivery />
      <FilterBar/>
      <NavBar/>
    </header>
    
  </div>
  </>
  )
}
