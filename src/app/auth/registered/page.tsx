"use client"

import React, { useState } from 'react'
import AuthWrapper from '@/components/Wrapper/AuthWrapper'
import AuthSuccessAlert from '@/components/Atoms/Alerts/authSuccessAlert'

function Registered() {

  return (
    <AuthWrapper description={<p>Check your inbox!</p>}>
      <>
        <AuthSuccessAlert message={"We have sent a confirmation email to mamihub@gmail.com"}/>
        <p style={{textAlign: "center", padding: "1rem"}}>Confirm your email address to you have your new account, Email expires in 24 hours.</p>
      </>
    </AuthWrapper>
  )
}

export default Registered
