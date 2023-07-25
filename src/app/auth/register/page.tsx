"use client"

import React, { useState } from 'react'
import styles from "@/styles/auth.module.scss"
import ContainImage from '@/components/Atoms/Image/contain'
import TextField from "@/components/Atoms/FormComponents/TextField"
import PrimarySubmitBtn from "@/components/Atoms/FormComponents/PrimarySubmitBtn"
import PhoneNumberField from '@/components/Atoms/FormComponents/PhoneNumberField'
import CheckboxInput from '@/components/Atoms/FormComponents/CheckboxInput'
import AuthWrapper from '@/components/Wrapper/AuthWrapper'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import unAuthenticatedRoute from '@/components/Functionalities/UnAuthenticatedRoute'
import myAxios from '@/services/myAxios'
import { toast, Toaster } from "sonner"
import GoBack from '@/components/Atoms/FormComponents/GoBack'
import { useAppDispatch } from '@/redux/hooks'
import { addUserInfo } from '@/redux/slices/authSlice'

function Register() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [clicked, setClicked] = useState(false)
  const [nextPage, setNextPage] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState('')

  const router = useRouter()
  const dispatch = useAppDispatch()


  const onSubmit = (e : React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setClicked(true)
    console.log('Signing up')
    const user = {
      firstName, lastName, email, password
    }
    myAxios.post("/user/register", user)
      .then((response) => {
        console.log(response.data)
        toast.success(response.data.message)
        dispatch(addUserInfo(response.data?.data))
        setClicked(false)
        router.push("/auth/verify")
      })
      .catch(err=>{
        toast.error(err.response?.data?.message)
        console.log(err.response?.data?.message)
        setClicked(false)
      })
    // router.push("/auth/registered")

  }

  return (
    <AuthWrapper description={<p>Welcome to MamiHub. Create an account or <Link href="/auth/login"><span className="underline">Log in</span></Link> if you already have an account</p>}>
      <>
        {nextPage && <GoBack action={()=>setNextPage(false)}/>}
        <form>
          { !nextPage && (
              <>
                <TextField placeholder={"Enter email address"} type={"email"} value={email} onchange={(e)=>setEmail(e.target.value)} />
                <TextField placeholder={"Enter password"} type={"password"} value={password} onchange={(e)=>setPassword(e.target.value)} />
                <TextField placeholder={"Confirm password"} type={"password"} value={cPassword} onchange={(e)=>setCPassword(e.target.value)} />
                <PrimarySubmitBtn text='Continue' loading={false} action={()=>setNextPage(true)} />
              </>
            )
          }
          { nextPage && (
              <>
                
                <div className='col-2'>
                  <TextField placeholder={"Enter First Name"} type={"text"} value={firstName} onchange={(e)=>setFirstName(e.target.value)} />
                  <TextField placeholder={"Enter Last Name"} type={"text"} value={lastName} onchange={(e)=>setLastName(e.target.value)} />
                </div>
                <PhoneNumberField placeholder={"Enter Phone Number"} value={phoneNumber} onchange={(e)=>setPhoneNumber(e.target.value)} />

                <CheckboxInput text={<p>I agree to the <Link href="/auth/login"><span className="underline">Terms and Condition</span></Link> </p>} value={agreeTerms} onchange={(e)=>setAgreeTerms(e.target.value)} />

                <PrimarySubmitBtn text={"Sign up"} loading={clicked} action={onSubmit} />

              </>
            )
          }

        
        </form>
      </>
    </AuthWrapper>
  )
}

export default unAuthenticatedRoute(Register)
