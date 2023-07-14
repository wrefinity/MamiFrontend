"use client"

import React, { useState } from 'react'
import styles from "@/styles/auth.module.scss"
import ContainImage from '@/components/Atoms/Image/contain'
import TextField from "@/components/Atoms/FormComponents/TextField"
import PrimarySubmitBtn from "@/components/Atoms/FormComponents/PrimarySubmitBtn"
import AuthOption from '@/components/AuthOptions'

function AuthWrapper({children, description}: {children: React.ReactNode, description: React.ReactNode}) {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [clicked, setClicked] = useState(false)

  const onSubmit = () => {
    setClicked(false)
    console.log('Signing in')
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authDesc}>
        <div className={styles.logo}>
          <ContainImage src='/images/logo.png' alt='MamiHub' />
        </div>  
        {description}
      </div> 

      {children}


    </div>
  )
}

export default AuthWrapper
