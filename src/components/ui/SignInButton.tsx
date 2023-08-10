'use client'

import React, { useState } from 'react'
import {Button} from './Button'
import { signIn } from 'next-auth/react'


const SignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSignIn = async()=>{
        try{

            setIsLoading(true)
            await signIn('google')

        }catch(error:any){
            console.log('Error signing up', error.message);


        }
    }

  return (
    <>
        <Button onClick={handleSignIn} isLoading={isLoading} >
            Sign in
        </Button>
    </>
  )
}

export default SignInButton