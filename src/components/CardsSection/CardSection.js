import React from 'react';
import './CardSection.css';
import { Link } from 'react-router-dom';

import blog1 from '../../assets/images/europe-map.jpg'
import blog2 from '../../assets/images/price-list.jpg'
import blog3 from '../../assets/images/flota.jpg'

const CardSection = () => {
    return (
        <section className="blog-area gray-bg">
        <div className="container">
            <div className="row">
                <h1 className="card-title">Firma transportowa Szwecja-Polska-Szwecja</h1>
            </div>
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                    <div className="single-blog wow fadeInUp" >
                        <div className="blog-image">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog-details text-center">
                            <div className="blog-meta"><Link to="#" ><i className="fa fa-map"></i></Link></div>
                            <h3><Link to="single-blog.html">Trasy</Link></h3>
                            <p>Pokonujemy stałą trasę Polska-Szwecja-Polska. Istnieje możliwość dogadania się i przewiezienia rzeczy w inne miejsce niż na zaznaczonych trasach.</p>
                            <Link to="firma" className="read-more">Sprawdź</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200"> 
                    <div className="single-blog wow fadeInUp" >
                        <div className="blog-image">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog-details text-center">
                            <div className="blog-meta"><Link  to="#"><i className="fa fa-money"></i></Link ></div>
                            <h3><Link to="single-blog.html">Cennik</Link></h3>
                            <p>Gwarantujemy najlepsze ceny na rynku, w przypadku przesyłek niestandardowych satysfakcjonującą cenę ustalimy indywidualnie</p>
                            <Link to="single-blog.html" className="read-more">Sprawdź</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                    <div className="single-blog wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-image">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog-details text-center">
                            <div className="blog-meta"><Link  to="#"><i className="fa fa-truck"></i></Link ></div>
                            <h3><Link to="single-blog.html">Flota</Link></h3>
                            <p>Samochody ciężarowe oraz dostawcze wchodzące w skład naszej floty zapewniają dokładne dopasowanie ładunków do potrzeb przewozów.</p>
                            <Link to="single-blog.html" className="read-more">Sprawdź</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CardSection;