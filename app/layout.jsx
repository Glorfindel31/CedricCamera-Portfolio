import './globals.css';
import 'tailwindcss/tailwind.css';
import {Inter} from 'next/font/google';
import {Providers} from './providers';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Cedric Florentin | Portfolio',
  description:
    'Explore the photography portfolio of Cedric Florentin, capturing light and life through the lens.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={inter.className}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0XGGBV5DT4" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0XGGBV5DT4');
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
