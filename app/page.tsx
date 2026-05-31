import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import Resultados from './components/Resultados';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: '#050b18' }}>
      <div className="scan-line" />
      <Navbar />
      <Hero />
      <Problema />
      <Servicos />
      <Diferenciais />
      <Resultados />
      <CTAFinal />
      <Footer />
    </main>
  );
}
