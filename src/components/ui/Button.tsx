import { FC, HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react'

const buttonVariants =  cva(
    "", {
        variants:{
            variant:{
                default: 'bg-slate-900 text-white hover:text-[#38BDF8] hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 ',
                danger: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
                outline: 'bg-slate-900 text-white  hover:text-[#38BDF8] hover:bg-slate-800 dark:bg-slate-200  darK:hover:bg-slate-100  border border-slate-200 dark:border-slate-700',
                subtle: 'bg-slate-100 text-slate-900 hover:text-[#38BDF8] dark:bg-slate-700 dark:text-slate-100',
                ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent hover:text-[#38BDF8]',
            },
            size:{

                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
                rounded: 'h-9 px-2 rounded-full'
            }
        },
        defaultVariants:{
            variant: 'default',
            size: 'default', 
        }
    }
)

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({className, children, variant, size, isLoading,...props}, ref)=> {
    return (
        <button className={cn(buttonVariants({variant, size, className}))}
        ref = {ref}
        disabled={isLoading}
        {...props}
        >   
            {isLoading ? <Loader2 className = "h-4 w-4 mr-2 animate-spins"/>: null}
            {children}
        </button>
    )
}
)

Button.displayName = 'Button'

export {Button, buttonVariants};