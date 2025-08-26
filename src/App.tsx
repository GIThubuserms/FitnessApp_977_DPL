import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Programs />
      <Transformations />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;