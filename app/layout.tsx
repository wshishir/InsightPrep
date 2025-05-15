import type { Metadata } from 'next';
import './globals.css';
import { Bricol } from '@/app/ui/fonts';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  icons: ['/avatar.png'],
  title: 'InsightPrep - AI Powered Interview Prepration',
  description: 'AI Powered Interview Prepration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${Bricol.className} antialiased bg-gradient-to-r from-[#000000] to-[#130F40]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
