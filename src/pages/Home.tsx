import { Header } from '../components/layout/Header/Header';
import { Hero } from '../components/hero/Hero';
import { HeroStats } from '../components/hero/HeroStats';
import { Features } from '../components/features/Features';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HeroStats />
        <Features />
      </main>
      <Footer />
    </div>
  );
};
