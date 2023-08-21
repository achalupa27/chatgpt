type Props = {
    chatId: string;
};

const Chat = ({ chatId }: Props) => {
    return (
        <div className='group w-full border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100'>
            <div className='m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl'>
                <div className='relative flex w-[30px] flex-col items-end'>
                    <div className='relative flex h-[30px] w-[30px] items-center justify-center rounded-sm p-1 text-white'></div>
                </div>
                <div className='relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]'>
                    <div className=''>
                        <div className='flex flex-grow flex-col gap-3'>
                            <div className='flex min-h-[20px] flex-col items-start gap-4 whitespace-pre-wrap'>
                                <div className='markdown prose dark:prose-invert light w-full break-words'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
