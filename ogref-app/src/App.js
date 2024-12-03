import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Router>
            <div className="App">
                <Navbar onContactClick={scrollToFooter} />
                <Routes>
                    <Route path="/" element={<Carousel />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
                <Footer ref={footerRef} />
            </div>
        </Router>
    );
}

export default App;