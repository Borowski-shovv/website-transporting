// import React from 'react';
// import ServicesSection from '../../components/ServicesSection/ServicesSection';
// // import {Container, Row, Col} from 'react-bootstrap';
// import serviceBg from '../../assets/images/service-cargo-bg.png';
// import trasyImg from '../../assets/images/vectorrmap.svg';
// import './OfferView.css';
// import {Link} from 'react-router-dom';
// import PricesTable from '../../components/PricesTable/PricesTable';
// import OwlCarousel from '../../components/OwlCarousel/Owldemo1'
// import Navigation from '../../components/Navigation/Navigation';
// import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
// import { useRef, useEffect } from "react";

// const OfferView = () => {
//       // let anchorRef = useRef(null);
//    let screen = useRef(null);
//    let body = useRef(null);
//    useEffect(() => {
//      var tl = new TimelineMax();
//      tl.to(screen, {
//        duration: 1.2,
//        height: "100%",
//        ease: Power3.easeInOut,
//      });
//      tl.to(screen, {
//        duration: 1,
//        top: "100%",
//        ease: Power3.easeInOut,
//        delay: 0.3,
//      });
//      tl.set(screen, { left: "-100%" });
//      TweenMax.to(body, .3, {
//        css: {
//          opacity: "1",
//          pointerEvents: "auto",
//          ease: Power4.easeInOut
//        }
//      }).delay(2);
//      return () => {
//        TweenMax.to(body, 1, {
//          css: {
//            opacity: "0",
//            pointerEvents: 'none'
//          }
//        });
//      }
//    });
//     return (
//         <>  
//             <div className="load-container">
//                 <div className="load-screen1" ref={(el) => (screen = el)}></div>
//             </div>
//             <div data-barba="container" className="Home">
//                 <div ref={(el) => (body = el)} className="Headd">
//                     <Navigation />
//                     <OwlCarousel />
//                     <section id="about">
//                         <Container>
//                             <Row className="about-container">
//                                 <Col lg={{span:6, order: 1}}  xs={{order: 2}}>
//                                     <div className="section-title oferta-title">
//                                         <h2>
//                                             Oferta     
//                                         </h2>
//                                     </div>
//                                     <p>
//                                     Przy przewozie kilku ładunków przygotujemy dla Ciebie atrakcyjną ofertę cenową, skontaktuj się z nami e-mailowo lub telefonicznie aby poznać szczegóły. Serdecznie zapraszamy do współpracy!
//                                     </p>
//                                     <ul>
//                                         <li>Zapewniamy szybki i tani przewóz paczek na trasie Polska – Szwecja – Polska. </li>
//                                         <li>Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
//                                         <li>Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
//                                         <li>Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
//                                     </ul>
//                                 </Col>

//                                 <Col lg={{span: 6, order: 2}}>
//                                     <img
//                                         src={serviceBg}                                
//                                         alt=""
//                                     />
//                                     <Link to="/kontakt" className="read-more contact-offer-btn">Kontakt</Link>
//                                 </Col>
//                             </Row>
//                         </Container>
//                     </section>
//                     <PricesTable />
//                     <ServicesSection />        
//                     <section className="map-section">
//                         <Container>
//                             <Row>
//                                 <Col className="mapa-content col-lg-6  order-2">
//                                     <div className="section-title">
//                                         <h2>
//                                             TRASY     
//                                         </h2>
//                                     </div>
//                                     <p>
//                                 Mapa przedstawia najczęściej pokonywane przez nas szlaki drogowe. w Szwecji jesteśmy w stanie dowieźć Twoją przesyłkę w każde miejsce
//                                     </p>
//                                     <ul>
//                                         <li>Dzięki doświadczeniu, które zdobyliśmy podczas lat pracy, wybieramy najbardziej optymalne trasy, abyś jak najkrócej czekał na swoją przesyłkę</li>
//                                         <li>Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
//                                         <li>Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
//                                         <li>Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
//                                     </ul>
//                                 </Col>

//                                 <Col lg={{span:6, order: 1}} sm={12} className="mapa" >
//                                     <img
//                                         src={trasyImg} 
                                    
//                                         alt=""
//                                     />
//                                 </Col>
//                             </Row>
//                         </Container>
//                     </section>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default OfferView;