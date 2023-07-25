import { Providers } from "@/redux/Providers"
import styles from "@/styles/auth.module.scss"

export const metadata = {
  title: 'MamiHub',
  description: 'Authentication Page ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Providers>
        <div className={styles.authLayout}>
          {children}
        </div>
      </Providers>
      </>
  )
}
