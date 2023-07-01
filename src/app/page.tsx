import Image from 'next/image'
import styles from '@/styles/home.module.scss'
import HomeBanner from '@/components/HomeBanner'
import ProductsContainer from '@/components/ProductsContainer'
import FlashSalesContainer from '@/components/FlashSalesContainer'
import TopCategories from '@/components/CategoriesContainer'

import BannerSameDayDelivery from '@/components/BannerSameDayDelivery'
import NavBar from '@/components/NavBar'
import FilterBar from '@/components/FilterBar'
import Header from '@/components/containers/Header'
import Footer from '@/components/containers/Footer'



export default function Home() {
  return (
    <>
      <Header/>      

      {/* Home Banner */}
      <section className='responsiveSection-m'>
        <HomeBanner />
      </section>
      <section className='responsiveSection-m'>
        <ProductsContainer cardTitle='Top Selling Items Today' />
      </section>
      <section className='responsiveSection-m'>
        <FlashSalesContainer cardTitle='Flash Sales l Up to 80% off   ' />
      </section>

      {/*  */}
      <section className={`responsiveSection-m ${styles.mamiQuality}`}>
        <div className={styles.qualities}>
          <div className={styles.quality}>
            <div className={styles.qualityImageBg}>
              <div className={styles.qualityImage}>
                <Image src={"/svgs/delivery.svg"} alt='Fast Delivery' fill style={{objectFit: "contain"}} />
              </div>
            </div>
            <h3>Fast Delivery</h3>
          </div>
          <div className={styles.quality}>
            <div className={styles.qualityImageBg}>
              <div className={styles.qualityImage}>
                <Image src={"/svgs/payment.svg"} alt='Fast Delivery' fill style={{objectFit: "contain"}} />
              </div>
            </div>
            <h3>Safe Payment</h3>
          </div>
          <div className={styles.quality}>
            <div className={styles.qualityImageBg}>
              <div className={styles.qualityImage}>
                <Image src={"/svgs/deals.svg"} alt='Fast Delivery' fill style={{objectFit: "contain"}} />
              </div>
            </div>
            <h3>Best Deals</h3>
          </div>
          <div className={styles.quality}>
            <div className={styles.qualityImageBg}>
              <div className={styles.qualityImage}>
                <Image src={"/svgs/support.svg"} alt='Fast Delivery' fill style={{objectFit: "contain"}} />
              </div>
            </div>
            <h3>24/7 Support</h3>
          </div>
          <div className={styles.quality}>
            <div className={styles.qualityImageBg}>
              <div className={styles.qualityImage}>
                <Image src={"/svgs/security.svg"} alt='Fast Delivery' fill style={{objectFit: "contain"}} />
              </div>
            </div>
            <h3>Shop with confidence</h3>
          </div>
        </div>
      </section>

      <section className="responsiveSection-m">
        <TopCategories cardTitle='Top Categories' />
      </section>

      {/* New Arrivals */}
      <section className='responsiveSection-m'>
        <ProductsContainer newArrivals cardTitle='New Arrivals' />
      </section>

      <Footer/>
    </>
  )
}
