import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {AppConfig} from '@/config/app.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${AppConfig.name}'s Profile`,
  description: `${AppConfig.name}'s online profile`,
  openGraph: {
    images: AppConfig.avatar.src,
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no,viewport-fit=cover"/>
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
