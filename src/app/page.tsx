import Image from 'next/image'
import styles from '@/styles/home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>MamiHub - <span>Quality Nigerian Made Product You can Trust</span></h1>
      <button>Shop Now</button>
    </main>
  )
}
