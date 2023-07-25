"use client"

import React, { useState } from 'react'
import styles from "@/styles/auth.module.scss"
import ContainImage from '@/components/Atoms/Image/contain'
import TextField from "@/components/Atoms/FormComponents/TextField"
import PrimarySubmitBtn from "@/components/Atoms/FormComponents/PrimarySubmitBtn"
import AuthOption from '@/components/AuthOptions'
import AuthWrapper from '@/components/Wrapper/AuthWrapper'
import Link from "next/link"
import unAuthenticatedRoute from '@/components/Functionalities/UnAuthenticatedRoute'
import myAxios from '@/services/myAxios'
import { toast } from 'sonner'
import { useAppDispatch } from '@/redux/hooks'
import { addUserInfo, login } from '@/redux/slices/authSlice'
import { useRouter } from 'next/navigation'

function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [clicked, setClicked] = useState(false)

  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = () => {
    setClicked(false)
    const userObj = {
      user, password
    }
    myAxios.post("/user/login", userObj)
      .then((response) => {
        toast.success(response.data.message)
        dispatch(login(response.data?.data))
        setClicked(false)
        router.push("/user")
      })
      .catch(err=>{
        toast.error(err.response?.data?.message)
        setClicked(false)
      })
  }

  return (
      <AuthWrapper description={<p>Welcome to MamiHub. Sign in to your account or <Link href="/auth/register"><span className="underline">create an account</span></Link> </p>}>
        <>  
        <form>
          <TextField placeholder={"Email address or phone number"} type={"text"} value={user} onchange={(e)=>setUser(e.target.value)} />
          <TextField placeholder={"Enter your password"} type={"password"} value={password} onchange={(e)=>setPassword(e.target.value)} />
          <p className={styles.pRight}>Forgot password?</p>
  
          <PrimarySubmitBtn text={"Sign in"} loading={clicked} action={onSubmit} />
          
        </form>
  
        <div className={styles.orDiv}>
          <p>or</p>
        </div>
  
        <AuthOption image='/images/icons/google.svg' text='Login with Google'/>
        <AuthOption image="/images/icons/apple.svg" text='Login with Apple' />
      
        
        </>
      </AuthWrapper>
  )
}

export default unAuthenticatedRoute(Login)
