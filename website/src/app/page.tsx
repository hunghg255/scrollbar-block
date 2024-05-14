import { Hero } from './components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scrollbar Block',
  description: 'A tiny library to block the scrollbar of the body element',
  openGraph: {
    title: 'Scrollbar Block',
    description: 'A tiny library to block the scrollbar of the body element',
    url: 'https://scrollbar-block.vercel.app/',
    siteName: 'Scrollbar Block',
    locale: 'en-US',
    type: 'website',
  },
  themeColor: '#000000',
};

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
