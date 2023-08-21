import SideBar from '@/components/SideBar';
import '../styles/globals.css';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ChatInput from '@/components/ChatInput';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang='en'>
            <body className='h-screen'>
                <SessionProvider session={session}>
                    {!session ? (
                        <Login />
                    ) : (
                        <div className='relative h-full w-full overflow-hidden dark:bg-[#343541]'>
                            {/* ClientProvider - Notification */}
                            <div className='flex h-full flex-1 flex-col md:pl-[260px]'>
                                <main className='transition-width relative flex h-full w-full flex-1 flex-col items-stretch overflow-hidden'>
                                    {children}
                                    <ChatInput />
                                </main>
                            </div>
                            <SideBar />
                        </div>
                    )}
                </SessionProvider>
            </body>
        </html>
    );
}
