import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue to-dark-navy">
      <Header />
      <Hero />
      <ProductCatalog />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
