import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/ProjectLoader';
import News from './components/pages/news/NewsLoader';
import About from './components/pages/about/About';
import Skills from './components/pages/skills/Skills';
import Footer from './components/footer/Footer';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="mt-xl-5 mt-lg-4 mt-md-3 mt-3 ms-xl-5 me-xl-5 ms-lg-4 me-lg-4 ms-md-3 me-md-3 ms-3 me-3">
      <BrowserRouter>
        <div className="mb-lg-5 aParent">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
