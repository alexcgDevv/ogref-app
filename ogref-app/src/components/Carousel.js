import React from 'react';

function Carousel() {
    return (
        <div id="homepageCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* Indicateurs */}
            <ol className="carousel-indicators">
                <li data-bs-target="#homepageCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#homepageCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#homepageCarousel" data-bs-slide-to="2"></li>
            </ol>

            {/* Wrapper pour les slides */}
            <div className="carousel-inner">
                {/* Page 1 */}
                <div className="carousel-item active" data-bs-interval="5000">
                    <img className="d-block w-100 darken-image" src="/assets/img_carousel/img_snowflake.jpg" alt="First slide" />
                    <div className="carousel-caption">
                        <img src="/assets/img_carousel/logo-house.png" alt="Titre de l'image 1" className="img-icones" />
                        <p>Service résidentiel</p>
                    </div>
                </div>
                {/* Page 2 */}
                <div className="carousel-item" data-bs-interval="5000">
                    <img className="d-block w-100 darken-image" src="/assets/img_carousel/img_thermopompe.jpg" alt="Second slide" />
                    <div className="carousel-caption">
                        <img src="/assets/img_carousel/logo-restaurant.png" alt="Titre de l'image 2" className="img-icones" />
                        <p>Service commercial</p>
                    </div>
                </div>
                {/* Page 3 */}
                <div className="carousel-item" data-bs-interval="5000">
                    <img className="d-block w-100 darken-image" src="/assets/img_carousel/img_truck_ladder.jpg" alt="Third slide" />
                    <div className="carousel-caption">
                        <img src="/assets/img_carousel/logo-factory.png" alt="Titre de l'image 3" className="img-icones" />
                        <p>Service industriel</p>
                    </div>
                </div>
            </div>

            {/* Contrôles précédent/suivant */}
            <a className="carousel-control-prev" href="#homepageCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Précédent</span>
            </a>
            <a className="carousel-control-next" href="#homepageCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Suivant</span>
            </a>
        </div>
    );
}

export default Carousel;
