import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Link from 'next/link';
import type { Metadata } from 'next';


export const metadata:Metadata = {
  title: 'Connexa | Home',
  description: 'A free & open-source api for gauging text similarity',
}

const HomePage = () => {
  return (
    <>
        <div className='h-screen max-w-6xl w-full flex flex-col items-center justify-center mx-auto gap-10 '>
         <Heading size={'sm'}  >
         Fostering Understanding through Text Similarity, Unveil Insights with Our API Service.
         </Heading>

         <Paragraph size={'default'}>
         Unveil the harmonious threads connecting your paragraphs, all while embracing the rhythm of responsiveness, courtesy of our 1REM = Infinite Versatility! 📜🕺🎵 with a free{" "}
        <Link
              href='/login'
              className='underline underline-offset-2 text-[#38BDF8] dark:text-light-gold'>
              API key
            </Link>
         </Paragraph>
        </div>
    </>
  )
}

export default HomePage