import {Providers} from './providers';
import Head from 'next/head';
import GoogleAnalytics from '@/utils/google-analytics';
import 'tailwindcss/tailwind.css';
import './globals.css';

export const metadata = {
  title: 'Cedric Florentin | Portfolio',
  description:
    'Explore the photography portfolio of Cedric Florentin, capturing light and life through the lens.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Photography, Portfolio, Prints" />
        <meta property="og:title" content="Cedric Florentin | Portfolio" />
        <meta
          property="og:description"
          content="Explore the photography portfolio of Cedric Florentin, capturing light and life through the lens."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dduwp6ob6/image/upload/v1696166893/film/comercial/Capture0012_p2jbne.jpg"
        />
        <meta property="og:url" content="https://cedriccamera.netlify.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
