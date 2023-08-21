'use client';

import PlusIcon from '@/assets/PlusIcon';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { db } from '../firebase';

const NewChat = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const createNewChat = async () => {
        const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp(),
        });

        router.push(`/chat/${doc.id}`);
    };

    return (
        <a className='mb-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 py-3 px-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10' onClick={createNewChat}>
            <PlusIcon />
            New chat
        </a>
    );
};

export default NewChat;
