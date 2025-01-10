import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onContactClick }) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            {/* Logo au centre */}
            <Link className="navbar-brand mx-auto" to="/">
               <img
                 src={`${process.env.PUBLIC_URL}/assets/img_navbar/og-new-rbw.png`}
                 alt="Logo"
                 className="navbar-logo"
               />
            </Link>

            {/* Bouton hamburger */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav" // ID du menu à montrer/cacher
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Contenu de la navbar */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    {/* Lien vers Accueil */}
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Accueil</Link>
                    </li>
                    {/* Lien vers À propos */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">À propos</Link>
                    </li>
                    {/* Lien vers Nous contacter */}
                    <li className="nav-item">
                        <a className="nav-link" href="#footer" onClick={onContactClick}>Nous contacter</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
