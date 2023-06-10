import { Inter } from 'next/font/google';
import './globals.css';

import AuthContext from './context/AuthContext';

import ToasterContext from './context/ToasterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messenger',
  description: 'Messenger',
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
