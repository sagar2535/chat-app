import { Inter } from 'next/font/google';

import ToasterContext from './context/ToasterContext';

import AuthContext from './context/AuthContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messenger clone',
  description: 'Messenger clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
