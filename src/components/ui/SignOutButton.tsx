"use client"
import React, { useState } from 'react'
import {Button} from './Button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSignOut = async()=>{
        try{
            setIsLoading(true)
            await signOut()
        }catch(error:any)
        {
            console.log("Error signing out...", error.message)
        }
    }

  return (
    <>

    <Button onClick={handleSignOut} isLoading={isLoading}>
        Sign out
    </Button>
    
    </>
  )
}

export default SignOutButton