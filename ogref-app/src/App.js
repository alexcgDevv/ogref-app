import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Emploi from './components/Emploi';

function App() {
    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Router>
            <div className="App">
                {/* Navbar toujours affichée */}
                <Navbar onContactClick={scrollToFooter} />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Carousel />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Emploi" element={<Emploi />} />

                    {/* Redirection automatique vers '/' */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                {/* Footer toujours affiché */}
                <Footer ref={footerRef} />
            </div>
        </Router>
    );
}

export default App;
