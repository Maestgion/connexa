"use client"

import { FC } from 'react';
import {ThemeProvider} from "next-themes"
// import {SessionProvider} from "next-auth/react"

interface ProviderProps {
    children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({children})=>
{
    return (
        <>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
            {/* <SessionProvider> */}
            {children}

            {/* </SessionProvider> */}
        </ThemeProvider>

        </>
    )
}

export default Provider;


