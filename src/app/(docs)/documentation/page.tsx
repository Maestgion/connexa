import { FC } from 'react';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import type { Metadata } from 'next';
import DocumentationTabs from '@/components/DocumentationTabs';

export const metadata: Metadata = {
    title: "Connexa | Documentation",
    description: 'A free & open-source api for gauging text similarity',
}


const DocumenationPage: FC = ()=>{
    return (
        <div className='container max-w-5xl mx-auto mt-14 max-h-scrren'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <Heading size={'sm'}>
                    Let's Make a Request !
                </Heading>
                <Paragraph >
                    api/v1/text-similarity
                </Paragraph>
                <DocumentationTabs/>
            </div>
        </div>
    )
}

export default DocumenationPage;