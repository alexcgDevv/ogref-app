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

            {/* Slides */}
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img
                      className="d-block w-100 darken-image img_carou"
                      src={`${process.env.PUBLIC_URL}/assets/img_carousel/thermo-normalisee.png`}
                      alt="Service résidentiel"
                    />
                    <div className="carousel-caption">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img_carousel/logo-house.png`}
                          alt="Icône maison"
                          className="img-icones"
                        />
                        <p>Service résidentiel</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img
                      className="d-block w-100 darken-image img_carou"
                      src={`${process.env.PUBLIC_URL}/assets/img_carousel/rooftop-normalisee.jpg`}
                      alt="Service commercial"
                    />
                    <div className="carousel-caption">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img_carousel/logo-restaurant.png`}
                          alt="Icône restaurant"
                          className="img-icones"
                        />
                        <p>Service commercial</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img
                      className="d-block w-100 darken-image img_carou"
                      src={`${process.env.PUBLIC_URL}/assets/img_carousel/trucks-normalisee.jpg`}
                      alt="Service industriel"
                    />
                    <div className="carousel-caption">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img_carousel/logo-factory.png`}
                          alt="Icône usine"
                          className="img-icones"
                        />

                        <p>Service industriel</p>
                    </div>
                </div>
            </div>

            {/* Contrôles */}
            <a className="carousel-control-prev" href="#homepageCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#homepageCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
