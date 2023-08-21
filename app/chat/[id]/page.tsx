'use client';

import Chat from '@/components/Chat';
import ScrollToBottom from 'react-scroll-to-bottom';

type Props = {
    params: {
        id: string;
    };
};

const ChatPage = ({ params: { id } }: Props) => {
    return (
        <div className='flex h-screen flex-col overflow-hidden'>
            <ScrollToBottom>
                <Chat chatId={id} />
            </ScrollToBottom>
        </div>
    );
};

export default ChatPage;
