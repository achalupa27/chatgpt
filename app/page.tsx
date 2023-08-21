'use client';

import Examples from '@/components/Examples';
import ScrollToBottom from 'react-scroll-to-bottom';

const page = () => {
    return (
        <div className='flex-1 overflow-hidden'>
            <ScrollToBottom className='h-full dark:bg-[#343541]'>
                <div className='flex flex-col items-center text-sm dark:bg-[#343541]'>
                    <Examples />
                    <div className='h-32 w-full flex-shrink-0 md:h-48'></div>
                </div>
            </ScrollToBottom>
        </div>
    );
};

export default page;
