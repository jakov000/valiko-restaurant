import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuHighlight from '@/components/MenuHighlight';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <MenuHighlight />
      <Map />
      <Footer />
    </main>
  );
}
