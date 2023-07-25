"use client"

import React, { useState } from 'react'
import AuthWrapper from '@/components/Wrapper/AuthWrapper'
import AuthSuccessAlert from '@/components/Atoms/Alerts/authSuccessAlert'
import unAuthenticatedRoute from '@/components/Functionalities/UnAuthenticatedRoute'
import OtpInput from '@/components/Atoms/FormComponents/OtpInput'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import PrimarySubmitBtn from '@/components/Atoms/FormComponents/PrimarySubmitBtn'
import myAxios from '@/services/myAxios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import styles from "@/styles/auth.module.scss"
import { clearUserInfo, logOut } from '@/redux/slices/authSlice'

function Verify() {
  const [otp, setOtp] = useState("")
  const [clicked, setClicked] = useState(false)

  const {auth} = useAppSelector((state)=>state)
  const router = useRouter()

  

  const handleVerify = (e : React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(auth)
    setClicked(true)
    const code = {
      code: otp,
      user: auth.userInfo?._id
    }

    myAxios.post("/code/verify", code)
      .then((response) => {
        console.log(response.data)
        toast.success(response.data.message)
        setClicked(false)
        router.push("/auth/login")
      })
      .catch(err=>{
        toast.error(err.response?.data?.message)
        console.log(err.response?.data?.message)
        setClicked(false)
      })
  }

  const handleResendCode = (e : React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    setClicked(true)
    const code = {
      user: auth.userInfo?._id
    }

    myAxios.post("/code/resend", code)
      .then((response) => {
        console.log(response.data)
        toast.success(response.data.message)
        setClicked(false)
        // router.push("/auth/login")
      })
      .catch(err=>{
        toast.error(err.response?.data?.message)
        console.log(err.response?.data?.message)
        setClicked(false)
      })
  }



  return (
    <AuthWrapper description={<p>Check your inbox!</p>}>
      <>
        <AuthSuccessAlert message={`We have sent a six digit verification code to your email ${auth.userInfo?.login ? auth.userInfo?.login : ""}`}/>
        <div className={styles.formGroup}>
          <p className="greyText" style={{textAlign: "center", padding: "1rem"}}>Enter verification code to complete your sign up.</p>
          {otp}
          <form style={{marginTop: "1rem"}}>
            <OtpInput
              value={otp}
              onChange={(val) => {
                setOtp(val);
              }}
            />

            <PrimarySubmitBtn text='Verify' action={handleVerify} loading={clicked} />
            <div className={styles.formActionText}>
              <p>Didn't receive a verification code <span onClick={handleResendCode}>Resend new code</span></p>
            </div>

          </form>

        </div>
        
      </>
    </AuthWrapper>
  )
}

export default unAuthenticatedRoute(Verify)
