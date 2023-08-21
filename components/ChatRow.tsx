import Link from 'next/link';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';

type Props = {
    id: string;
};

const ChatRow = ({ id }: Props) => {
    const pathName = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);
    const [messages, loading, error] = useCollection(collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'));

    useEffect(() => {
        if (!pathName) return;
        setActive(pathName.includes(id));
    }, [pathName]);

    const removeChat = async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.replace('/');
    };

    return (
        <Link className={`chatRow ${active && 'bg-gray-700/50'}`} href={`/chat/${id}`}>
            <ChatBubbleLeftIcon className='h-5 w-5' />
            <p className='flex-1 truncate'>{messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}</p>
            <TrashIcon onClick={removeChat} className='h-5 w-5 hover:text-red-700' />
        </Link>
    );
};

export default ChatRow;
