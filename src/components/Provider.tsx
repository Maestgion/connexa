"use client"

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes"

interface ProviderProps {
    children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({children})=>{
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}


export default Provider;