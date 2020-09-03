import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <>
                <section className="service-area">
                    <div className="service-top-area padding-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                                    <div className="area-title text-center wow fadeIn">
                                        <h2>Our Service</h2>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <div className="service-content wow fadeIn">
                                        <h2>we offer quick & powerful logistics solution</h2>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.</p>
                                        <a href="service.html" className="read-more">Learn More</a>
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <div className="service-catalouge-content-area wow fadeIn">
                                        <div className="service-catalouge-bg"></div>
                                        <div className="row">
                                            <div className="col-md-7 col-lg-7 col-md-offset-5 col-lg-offset-5 col-sm-12 col-xs-12">
                                                <div className="catalouge-content">
                                                    <h3>Why Choose Us ?</h3>
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.</p>
                                                    <ul>
                                                        <li><i className="fa fa-check"></i> Najlepsza oferta cenowa</li>
                                                        <li><i className="fa fa-check"></i> Dostarczamy w każde miejsce w Szwecji</li>
                                                        <li><i className="fa fa-check"></i> Szybki przewóz Twoich przesyłek</li>
                                                        <li><i className="fa fa-check"></i> Starannie zabezpieczamy każdą przesyłkę</li>
                                                    
                                                    </ul>                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default AboutSection;