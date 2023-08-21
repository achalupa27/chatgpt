'use client';

import { signIn } from 'next-auth/react';
import { logo } from '../data/chatgpt';

const Login = () => {
    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-50 text-white dark:bg-[#343541]'>
            <div className='flex w-96 flex-col items-center justify-center'>
                <div className='mb-5'>
                    <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d={logo} fill='white'></path>
                    </svg>
                </div>
                <div className='mb-2 text-center'>Welcome to ChatGPT</div>
                <div className='mb-4 text-center'>Log in with your Google account to continue</div>
                <button onClick={() => signIn('google')} className='rounded-[4px] bg-[#10a37f] py-2 px-3 hover:bg-[#1a7f64]'>
                    Log in
                </button>
            </div>
        </div>
    );
};

export default Login;
