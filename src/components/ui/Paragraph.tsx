import { FC, HTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from "class-variance-authority"
import { cn } from '@/lib/utils';

const paragraphVariants = cva(
    "text-black dark:text-white max-w-prose text-center mb-4 ", {
        variants: {
           size:{
            default: "text-lg sm:text-xl",
            sm: "text-sm, sm:text-base",
           }
        },
        defaultVariants:{
            size: 'default',
        }
    }
)

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants>{
    
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps >(({className, size, children, ...props}, ref)=>{
    return(
        <p ref={ref} {...props} className={cn(paragraphVariants({size, className}))}>
            {children}
        </p>
    )
})

Paragraph.displayName = "Paragraph"

export default Paragraph