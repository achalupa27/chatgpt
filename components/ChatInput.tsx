'use client';

import SendIcon from '@/assets/SendIcon';
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

type Props = {
    chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
    const { data: session } = useSession();
    const [prompt, setPrompt] = useState('');

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        // useSWR to get model
        const model = 'text-davinci-003';

        const input = prompt.trim();
        setPrompt('');

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            },
        };

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message);

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session,
            }),
        }).then(() => {});
    };

    return (
        <div className='absolute bottom-0 left-0 w-full border-t bg-white pt-2 dark:border-white/20 dark:bg-[#343541] md:border-t-0 md:border-transparent md:!bg-transparent md:dark:border-transparent'>
            <form onSubmit={sendMessage} className='stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-3xl'>
                <div className='relative flex w-full flex-grow flex-col rounded-md border border-black/10 bg-white py-2 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-[#40414F] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] md:py-3 md:pl-4'>
                    <textarea data-id='root' onChange={(e) => setPrompt(e.target.value)} value={prompt} className='m-0 h-[24px] max-h-[200px] w-full resize-none overflow-y-hidden border-0 bg-transparent p-0 pr-7 pl-2 focus:outline-none focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0'></textarea>
                    <button disabled={!prompt} type='submit' className='absolute bottom-1.5 right-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 disabled:hover:bg-transparent dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:disabled:hover:bg-transparent md:bottom-2.5 md:right-2'>
                        <SendIcon />
                    </button>
                </div>
            </form>
        </div>
    );
};
export default ChatInput;
