import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onContactClick }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                <img src="/assets/img_navbar/og-red-blue-white.png" alt="Logo" className="navbar-logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">À propos</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer" onClick={onContactClick}>Nous contacter</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
