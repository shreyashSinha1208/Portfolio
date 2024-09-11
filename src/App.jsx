import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Timeline from './Timeline';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Submitted from './Submitted';
import Technologies from './Technologies';
import Progress from './Progress';
import Portfolio from './Portfolio';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-blue-950 z-50">
    <div className="relative w-28 h-28">
      <div className="absolute w-28 h-12 bg-white border-4 border-white animate-abox1"></div>
      <div className="absolute w-12 h-12 bg-white border-4 border-white animate-abox2"></div>
      <div className="absolute w-12 h-12 bg-white border-4 border-white animate-abox3"></div>
      <h3 className="text-white font-extrabold text-2xl font-Inter animate-typing overflow-hidden whitespace-nowrap mt-32">
        Shreyash.
      </h3>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen">

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <div data-aos="fade-right">
                    <Hero />
                  </div>
                  <div data-aos="fade-up">
                    <Skills />
                  </div>
                  <div data-aos="fade-right">
                    <Technologies />
                  </div>
                  <Portfolio/>
                  <div data-aos="fade-up">
                    <Progress />
                  </div>
                  <div data-aos="fade-right">
                    <Timeline />
                  </div>
                  <div data-aos="fade-bottom">
                    <About />
                  </div>
                  <div data-aos="fade-up">
                    <Contact />
                  </div>
                  <div data-aos="fade-up">
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/submitted" element={<Submitted />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
