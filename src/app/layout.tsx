import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Sportgaststätte ASV Fürth - Deutsche & Armenische Küche',
  description: 'Erleben Sie die einzigartige Kombination aus traditioneller deutscher Küche und armenischen Spezialitäten in der Sportgaststätte ASV Fürth. Jetzt Tisch reservieren!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
