import type { Metadata } from 'next';
import './globals.css';
import { Bricol } from '@/app/ui/fonts';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  icons: ['/avatar.png'],
  title: 'InsightPrep',
  description: 'AI powered platform for mock interviews',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${Bricol.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
