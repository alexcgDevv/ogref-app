import React from 'react';

function About() {
    return (
        <div className="about-container">
            <h1>À propos de nous</h1>
            <p>Fondée à Richelieu et transmise à travers trois générations, O.G. Réfrigération incarne l'excellence et
                la polyvalence dans le domaine du chauffage, de la climatisation et de la réfrigération. Depuis ses
                débuts, notre entreprise a su évoluer tout en restant fidèle à l'engagement de qualité instauré par son
                fondateur, Omer Gougeon et ses fils Michel et Marc. Initialement axée sur les besoins locaux,
                notre entreprise a su s'adapter aux
                évolutions technologiques et aux exigences diversifiées de notre clientèle, couvrant ainsi les secteurs
                résidentiel, commercial et industriel. Aujourd'hui dirigée par Maxime et Alexandre, les petits-fils
                d'Omer, O.G. Réfrigération continue de se distinguer par son savoir-faire unique et son approche
                personnalisée, assurant à chacun de nos clients une solution optimale et durable.</p>

            <div className="about-section">
                <div className="text-content">
                    <h2>Notre Vision</h2>
                    <p>Notre vision repose sur les principes d'authenticité et de fiabilité,
                        des valeurs qui nous guident dans chacune de nos actions et décisions. Nous sommes dédiés à
                        fournir uniquement les meilleurs produits disponibles, en nous appuyant sur des marques
                        reconnues telles que Fujitsu et York. Fiers de notre
                        expertise, nous nous engageons à offrir une expérience personnalisée et adaptée aux besoins
                        spécifiques de chaque client. </p>
                </div>
                <div className="image-content">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img_about/camion-og.jpg`}
                      alt="Notre Mission"
                    />
                </div>
            </div>


        </div>
    );
}

export default About;
