'use client'
import { FC, useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import Code from './ui/Code'
import {nodejs, python} from '@/helpers/documentaionCode'


const DocumentationTabs: FC = ()=>{

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(()=>{
        setIsMounted(true)
    }, [])

    if(!isMounted)
    {
        return null
    }
   
    return isMounted ? (
        <>
          <Tabs defaultValue = "nodejs" className='max-w-2xl w-full px-4 sm:px-0'>
            <TabsList>
                <TabsTrigger value='nodejs'>
                    NodeJS
                </TabsTrigger>
                <TabsTrigger value='python'>
                    Python
                </TabsTrigger>
            </TabsList>

            <TabsContent value='nodejs' className='my-4  overflow-scroll scrollbar-hide'>
                
           
            <Code animated code={nodejs} language='javascript' show/>

                
            </TabsContent>
            <TabsContent value='python' className='my-4  overflow-scroll'>
                
                    <Code animated code={python} language='python' show/>
                
            </TabsContent>

          </Tabs>
        </>
    ): null
}

export default DocumentationTabs;