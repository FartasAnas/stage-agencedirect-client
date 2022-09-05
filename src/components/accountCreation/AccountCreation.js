import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function AccountCreation() {
    const location=useLocation()
    useEffect(() => {
        console.log(location?.state?.pack)
    }, [])
  return (
    <div>AccountCreation</div>
  )
}
