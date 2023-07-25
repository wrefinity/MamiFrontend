"use client"

import authenticatedRoute from '@/components/Functionalities/AuthenticatedRoute'
import React from 'react'

function Dashboard() {
  return (
    <div>
      Buyer's Dashboard
    </div>
  )
}

export default authenticatedRoute(Dashboard)
