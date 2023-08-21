import LightningIcon from '@/assets/LightningIcon';
import ExclamationIcon from '@/assets/ExclamationIcon';
import SunIcon from '@/assets/SunIcon';

const Examples = () => {
    return (
        <div className='w-full px-6 text-gray-800 dark:text-gray-100 md:flex md:h-full md:max-w-2xl md:flex-col lg:max-w-3xl'>
            <h1 className='mt-6 ml-auto mr-auto mb-10 flex items-center justify-center gap-2 text-center text-4xl font-semibold sm:mt-[20vh] sm:mb-16'>ChatGPT</h1>
            <div className='items-start gap-3.5 text-center md:flex'>
                <div className='mb-8 flex flex-1 flex-col gap-3.5 md:mb-auto'>
                    <h2 className='m-auto flex items-center gap-3 text-lg font-normal md:flex-col md:gap-2'>
                        <SunIcon />
                        Examples
                    </h2>
                    <ul className='m-auto flex w-full flex-col gap-3.5 sm:max-w-md'>
                        <button className='w-full rounded-md bg-gray-50 p-3 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900'>"Explain quantum computing in simple terms" →</button>
                        <button className='w-full rounded-md bg-gray-50 p-3 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900'>"Got any creative ideas for a 10 year old’s birthday?" →</button>
                        <button className='w-full rounded-md bg-gray-50 p-3 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900'>"How do I make an HTTP request in Javascript?" →</button>
                    </ul>
                </div>
                <div className='mb-8 flex flex-1 flex-col gap-3.5 md:mb-auto'>
                    <h2 className='m-auto flex items-center gap-3 text-lg font-normal md:flex-col md:gap-2'>
                        <LightningIcon />
                        Capabilities
                    </h2>
                    <ul className='m-auto flex w-full flex-col gap-3.5 sm:max-w-md'>
                        <li className='w-full rounded-md bg-gray-50 p-3 dark:bg-white/5'>Remembers what user said earlier in the conversation</li>
                        <li className='w-full rounded-md bg-gray-50 p-3 dark:bg-white/5'>Allows user to provide follow-up corrections</li>
                        <li className='w-full rounded-md bg-gray-50 p-3 dark:bg-white/5'>Trained to decline inappropriate requests</li>
                    </ul>
                </div>
                <div className='mb-8 flex flex-1 flex-col gap-3.5 md:mb-auto'>
                    <h2 className='m-auto flex items-center gap-3 text-lg font-normal md:flex-col md:gap-2'>
                        <ExclamationIcon />
                        Limitations
                    </h2>
                    <ul className='m-auto flex w-full flex-col gap-3.5 sm:max-w-md'>
                        <li className='w-full rounded-md bg-gray-50 p-3 dark:bg-white/5'>May occasionally generate incorrect information</li>
                        <li className='w-full rounded-md bg-gray-50 p-3 dark:bg-white/5'>May occasionally produce harmful instructions or biased content</li>
                        <li className='w-full rounded-md bg-gray-50 p-3 dark:bg-white/5'>Limited knowledge of world and events after 2021</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Examples;
