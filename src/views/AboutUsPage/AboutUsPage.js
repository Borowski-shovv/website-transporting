import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import  './AboutUsPage.css';
import companyPhoto from '../../assets/images/img_1.jpg';
import Promobar from '../../components/Promobar/Promobar';
import OwlCarousel from 'react-owl-carousel';
import OwlCarousel1 from '../../components/OwlCarousel/Owldemo1';
import card1 from '../../assets/images/money.svg'
import card2 from '../../assets/images/world.svg'
import card3 from '../../assets/images/plane.svg'
import card4 from '../../assets/images/safe.svg'
import Navigation from '../../components/Navigation/Navigation';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

const AboutUsPage = () => {
   // let anchorRef = useRef(null);
   let screen = useRef(null);
   let body = useRef(null);
   useEffect(() => {
     var tl = new TimelineMax();
     tl.to(screen, {
       duration: 1.2,
       height: "100%",
       ease: Power3.easeInOut,
     });
     tl.to(screen, {
       duration: 1,
       top: "100%",
       ease: Power3.easeInOut,
       delay: 0.3,
     });
     tl.set(screen, { left: "-100%" });
     TweenMax.to(body, .3, {
       css: {
         opacity: "1",
         pointerEvents: "auto",
         ease: Power4.easeInOut
       }
     }).delay(2);
     return () => {
       TweenMax.to(body, 1, {
         css: {
           opacity: "0",
           pointerEvents: 'none'
         }
       });
     }
   });
  return (
    <>
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" className="Home">
        <div ref={(el) => (body = el)} className="Headd">
          <Navigation />
          <OwlCarousel1 />
          <div className="company-view-wrapper">
            <Container className="about-section-wrapper">
              <Row>
                <Col md={{span:5, order:2}}  className=" ml-auto mb-5 " >
                  <img src={companyPhoto} alt="" className="img-fluid rounded" />
                </Col>
                <Col className="col-md-6 order-md-1" >
                  <div className="section-title text-left pb-1 border-primary mb-4">
                    <h2 className=" text-primary">O firmie</h2>
                  </div>
                    <p>Jesteśmy firmą z 20 letnim doświadczeniem. Dzięki zdobytemu doświadczeniu wybieramy najbardziej optymalne trasy, aby odbiorca jak najszybciej cieszył się swoją przesyłką </p>
                    <p>Specjalizujemy się w przeprowadzkach, transporcie ładunków drobnicowych jak i cało pojazdowych oraz materiałów delikatnych i ponadgabarytowych tj. okien XXL, szkła luster (w dużych taflach), blatów kamiennych i innych nietypowych ładunków. Można zlecić nam przewóz większego  jak i mniejszego ładunku, począwszy od drobnych sprzętów RTV – AGD, walizek, narzędzi oraz materiałów budowlanych, kończąc na rowerach, motocyklach, oknach oraz wielu innych. Po wcześniejszym porozumieniu nadawcy z odbiorcą wysyłki, transportujemy również zwierzęta. O wszystkie powierzone nam przesyłki dbamy z należytą ostrożnością</p>
                    <p className="mb-5">Nasi klienci posiadają gwarancję pełnej organizacji oraz obsługi transportu z naszej strony. Obsłużyliśmy już setki zadowolonych klientów!</p>
                </Col>
              </Row>
            </Container>
            <div className="services" data-aos="fade-in"  data-aos-delay="100">
              <Container >
                  <div className="section-title">
                    <h2>warto z nami współpracować</h2>
                  </div>
                  <Row>
                    <Col md={6} lg={3} 
                      className="d-flex align-items-stretch"
                
                    >
                      <div className="icon-box icon-box-blue"
                      data-aos="fade-up"  data-aos-delay="100">
                      <img className="card-img" src={card1} alt="" />
                    
                        <h4 className="title"> Najlepsza oferta cenowa</h4>
                        <p className="description">
                          Obniż lub całkowicie wyeliminuj rachunki za ogrzewanie i
                          energię elektryczną.
                        </p>
                      </div>
                    </Col>

                    <div
                      className="col-md-6 col-lg-3 d-flex align-items-stretch"
                      data-aos="fade-up"  data-aos-delay="200"
                    >
                      <div className="icon-box icon-box-blue">
                        <img className="card-img" src={card2} alt="" />
                        <h4 className="title">Dostarczamy w każde miejsce w Szwecji</h4>
                        <p className="description">
                          Dbaj o swoje otoczenie i wyeliminuj emisję zanieczyszczeń.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 col-lg-3 d-flex align-items-stretch"
                      data-aos="fade-up"  data-aos-delay="300"
                    >
                      <div className="icon-box icon-box-blue">
                      <img className="card-img" src={card3} alt="" />
                        <h4 className="title"> Szybki przewóz Twoich przesyłek</h4>
                        <p className="description">
                          Zaspokaja w 100% zapotrzebowanie energetyczne domu. 
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 col-lg-3 d-flex align-items-stretch"
                      data-aos="fade-up"  data-aos-delay="400"
                    >
                      <div className="icon-box icon-box-blue">
                      <img className="card-img" src={card4} alt="" />
                        <h4 className="title">Starannie zabezpieczamy każdą przesyłkę</h4>
                        <p className="description">
                          System działa automatycznie i bardzo cicho. Brak spalania
                          paliwa to spokój i wygoda dla całej rodziny.
                        </p>
                      </div>
                    </div>
          
                  </Row>
                </Container>
            </div>
          <Promobar />
          <section className="testimonials" data-aos="fade-in">
                  <div className="container">
                    <div className="section-title">
                      <h2>Opinie naszych klientów</h2>
                    
                    </div>

                <OwlCarousel items={1} autoplay={true} loop className="owl-carousel testimonials-carousel">
                  <div className="testimonial-item">
                    <div className="circle">K</div>
                    <h3>Katarzyna Stanisławska</h3>
                  
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Solidna firma, troszkę musiałam poczekać na montaż, ale reszta szybko sprawnie i przyjemnie.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <div className="circle">J</div>
                    <h3>Janusz Kropiewnicki</h3>
                  
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Świetna obsługa klienta, co w branży budowlanej niestety nie jest standardem. Nie było problemów z komunikacją, a sam montaż trwał zaledwie kilka dni.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <div className="circle">A</div>
                    <h3>Aleksander Dolecki</h3>
                
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Miłe zaskoczenie, gdyż przyjechała ekipa miłych, młodych panów, a wbrew pozorom wszystko z zachowaniem najwyższej kultury i profesjonalizmu
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <div className="circle">K</div>
                    <h3>Krzysztof Piwowarczyk</h3>
                  
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Profesjonaliści w każdym calu! Szybka obsługa i wszystko działa bez zarzutu!
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </OwlCarousel>
              </div>
          </section>
        </div>
        </div>
        </div>
   
    </>
  );
};

export default AboutUsPage;
