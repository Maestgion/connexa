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
      <body className='antialiased min-h-screen dark:bg-slate-900 bg-white '>
        
        <Provider>
        <Navbar/>
        <main>
        {children}

        </main>
        </Provider>
        
   </body>
    </html>
  )
}
 