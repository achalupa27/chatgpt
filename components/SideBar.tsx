'use client';

import { signOut, useSession } from 'next-auth/react';
import NewChat from './NewChat';
import LightModeIcon from '@/assets/LightModeIcon';
import AccountIcon from '@/assets/AccountIcon';
import FAQIcon from '@/assets/FAQIcon';
import LogoutIcon from '@/assets/LogoutIcon';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';

const SideBar = () => {
    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc')));

    console.log(chats);
    return (
        <div className='dark hidden bg-[#202123] md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col'>
            <div className='flex h-full min-h-0 flex-col '>
                <div className='scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20'>
                    <nav className='flex h-full flex-1 flex-col space-y-1 p-2'>
                        <NewChat />
                        <div className='flex-1 flex-col overflow-y-auto border-b border-white/20'>
                            <div className='flex flex-col gap-2 text-sm text-gray-100'>
                                {chats?.docs.map((chat) => (
                                    <ChatRow key={chat.id} id={chat.id} />
                                ))}
                            </div>
                        </div>
                        <a className='menuButton'>
                            <LightModeIcon />
                            Light mode
                        </a>
                        <a className='menuButton'>
                            <AccountIcon />
                            My account
                        </a>
                        <a href='https://help.openai.com/en/collections/3742473-chatgpt' target='_blank' className='menuButton'>
                            <FAQIcon />
                            Updates &amp; FAQ
                        </a>
                        <a className='menuButton' onClick={() => signOut()}>
                            <LogoutIcon />
                            Log out
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
