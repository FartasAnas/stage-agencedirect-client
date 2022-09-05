import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectCurrentToken , selectCurrentUser } from '../../features/auth/authSlice'

export default function Home() {
    const location=useLocation();
    const token=useSelector(selectCurrentToken)
    const user=useSelector(selectCurrentUser)
    const [refreshed,setRefreshed]=useState(true)
    return (
        <div>
            <p>{token}</p>
            <p>{user}</p>
        </div>
    )
}
