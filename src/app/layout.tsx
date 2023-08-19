import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Provider from '@/components/Provider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900  antialiased", inter.className)} >
      <body className='antialiased min-h-screen dark:bg-slate-900 bg-white scrollbar-hide'>
        
        <Provider>
        <Navbar/>
        <main className='bg-gradient-to-tr from-white from-45% via-purple-300 via-55% to-white to-85% dark:bg-gradient-to-tr dark:from-slate-900  ' >

        {children}

        </main> 
        </Provider>
        
   </body>
    </html>
  )
}
 