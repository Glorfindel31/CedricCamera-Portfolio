import './globals.css';
import 'tailwindcss/tailwind.css';
import {Inter} from 'next/font/google';
import {Providers} from './providers';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Cedric Florentin | Portfolio',
  description: 'My portfolio online',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
