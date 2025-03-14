import React from 'react';

// Modifier le composant Footer pour qu'il puisse recevoir une ref.
const Footer = React.forwardRef((props, ref) => {
    return (
        <footer ref={ref} className="footer bg-dark text-white mt-5 p-4 text-center text-lg-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Nous contacter</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <p><strong>Adresse :</strong> 213 14e Av, Richelieu, QC J3L 3V1, Canada</p>
                            </li>
                            <li>
                                <p><strong>Téléphone :</strong> 450-658-1870</p>
                            </li>
                            <li>
                                <p><strong>Licence RBQ :</strong> 8295-8588-46</p>
                            </li>
                            <li>
                                <p><strong>Courriel :</strong> contact@ogref.ca</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Nos partenaires</h5>
                        <div className="footer-partners">
                            <a href="https://www.york.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img_footer/york.png`}
                                    alt="Logo York"
                                    className="partner-logo"
                                />
                            </a>
                            <a href="https://www.fujitsu.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img_footer/Fujitsu-Logo.svg`}
                                    alt="Logo Fujitsu"
                                    className="partner-logo"
                                />
                            </a>
                            <a href="https://www.master.ca" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img_footer/master.png`}
                                    alt="Le Groupe Master"
                                    className="partner-logo"
                                />
                            </a>
                            <a href="https://www.elios.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img_footer/elios.png`}
                                    alt="Elios"
                                    className="partner-logo"
                                />
                            </a>
                            <a href="https://www.vanee.ca" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img_footer/vanee.png`}
                                    alt="Vanee"
                                    className="partner-logo"
                                />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © {new Date().getFullYear()} Tous droits réservés
                </div>
            </div>
        </footer>
    );
});

export default Footer;
