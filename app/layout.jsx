import {Providers} from './providers';
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
