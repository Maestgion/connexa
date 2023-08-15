'use client'
import { FC, useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import SimpleBar from 'simplebar-react'
import Code from './ui/Code'
import {nodejs, python} from '@/helpers/documentaionCode'


const DocumentationTabs: FC = ()=>{

   
    return (
        <>
          <Tabs defaultValue = "nodejs" className='max-w-2xl w-full'>
            <TabsList>
                <TabsTrigger value='nodejs'>
                    NodeJS
                </TabsTrigger>
                <TabsTrigger value='python'>
                    Python
                </TabsTrigger>
            </TabsList>

            <TabsContent value='nodejs'>
                <SimpleBar forceVisible='y' className='max-h-[70vh] overflow-y-hidden '>
                    <Code animated code={nodejs} language='javascript' show/>
                </SimpleBar>
            </TabsContent>
            <TabsContent value='python'>
                <SimpleBar forceVisible='y' className='min-h-screen '>
                    <Code animated code={python} language='python' show/>
                </SimpleBar>
            </TabsContent>

          </Tabs>
        </>
    )
}

export default DocumentationTabs;