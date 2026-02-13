import type { Metadata } from 'next';
import { Outfit, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Restaurant Lori - Deutsche & Armenische Küche',
  description: 'Erleben Sie die einzigartige Kombination aus traditioneller deutscher Küche und armenischen Spezialitäten im Restaurant Lori. Jetzt Tisch reservieren!',
  icons: {
    icon: '/logo/3.jpeg',
    apple: '/logo/3.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} ${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
