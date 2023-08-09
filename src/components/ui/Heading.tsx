import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const headingVariants = cva(
    "text-white dark:text-black text-center lg:text-left",{
        variants:{
            size:{
                default: "text-4xl md:text-5xl lg:text-6xl",
            lg:"text-5xl md:text-6xl lg:text-7xl",
            sm:"text-3xl md:text-4xl lg:text-5xl"
            }
        },
        defaultVariants:{
            size: 'default'
        }
    }
)

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants>{}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps >(({
    size, 
    className,
    children,
    ...props

}, ref)=>{
    return (
        <h1 ref={ref} className={cn(headingVariants({size, className}))} {...props}>{children}</h1>
    )
})

Heading.displayName = "Heading"


export default Heading;