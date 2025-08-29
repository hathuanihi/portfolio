import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { herobg } from './assets';

function App() {

  return (
    <BrowserRouter>
      <div 
        className="relative z-0 bg-primary w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="w-full min-h-screen">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center w-full">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Education />
          <Experience />
          <Tech />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
