import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { buttonVariants } from './ui/Button'
import SignInButton from './ui/SignInButton'
import SignOutButton from './ui/SignOutButton'

const Navbar = () => {

    const session = false;

  return (
    <>
        <div className='h-20 fixed top-0 right-0 left-0 border-b border-slate-300 dark:border-slate-700 backdrop-blur-md  shadow-sm bg-white/75 dark:bg-slate-900/5 z-99  flex justify-between items-center'>
            <div className='container w-full max-w-7xl mx-auto flex justify-between items-center'>

                <p className='text-black font-semibold text-2xl cursor-pointer dark:text-white'>
                    Connexa
                </p>

        
            <div className='md:hidden'>
                <ThemeToggle />
            </div>

            <div className='hidden md:flex gap-4'>

                <ThemeToggle/>

                <Link href="/documentation"
                className={buttonVariants({variant: 'ghost'})}
                >
                    Documentation
                </Link>

                {
                    session ? (
                     <>
                           <Link
                        href='/dashboard'
                        className={buttonVariants({variant: 'ghost'})}
                        >
                        Dashboard
                        </Link>

                       <SignOutButton/>
                     </>
                    ) : (
                        <SignInButton/>
                    )
                }

            </div>



                
            </div>
        </div>

        
    </>
  )
}

export default Navbar