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
      <div className={styles.authLayout}>
        {children}
      </div>
      </>
  )
}
