import React from 'react';
import PricesTable from '../../components/PricesTable/PricesTable';
import OwlCarousel from '../../components/OwlCarousel/Owldemo1';
import Navigation from '../../components/Navigation/Navigation'
import { Container, Row, Col } from 'react-bootstrap';
import './PricesView.css';
import wozek from '../../assets/images/contact-right.png'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

const PricesView = () => {
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
                        <OwlCarousel />
                        <PricesTable />
                        <Container>
                                <Row>
                                    <Col lg={12} className="prices-form-wrapper">
                                        <div className="section-title">
                                            <h2 className="text-primary">Nadaj paczkę</h2>
                                            <p>Skontaktujemy się z Tobą i poinformujemy o szczegółach</p>
                                        </div>
                                    </Col>
                                    <div className="col-lg-8">
                                    <form
                                        className="form-contact contact_form"
                                        action="?"
                                        method="post"
                                        id="contactForm"
                                        autoComplete="off"                            
                                    >
                                        <div className="row">
                                    
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="name"
                                                required
                                                id="name"
                                                type="text"
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Twoje imię'"
                                                placeholder="Twoje imię *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                required
                                                name="name"
                                                id="name"
                                                type="text"
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Twoje imię'"
                                                placeholder="Twoje nazwisko *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                                type="email"
                                                required
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Email'"
                                                placeholder="Adres Email *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="phone"
                                                id="phone"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Telefon kontaktowy *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="ulica załadunku"
                                                id="ulica załadunku"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Ulica i nr budynku załadunku *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="miastoZaładunku"
                                                id="miastoZaładunku"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Miasto załadunku *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="kod-pocztowy"
                                                id="kod-pocztowy"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Kod pocztowy załadunku *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="ulica załadunku"
                                                id="ulica załadunku"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Ulica i nr budynku rozładunku *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="miastoZaładunku"
                                                id="miastoZaładunku"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Miasto rozładunku *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <input
                                                className="form-control"
                                                required
                                                name="kod-pocztowy"
                                                id="kod-pocztowy"                                    
                                                // onFocus="this.placeholder = ''"
                                                // onBlur="this.placeholder = 'Temat wiadomości'"
                                                placeholder="Kod pocztowy rozładunku *"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="check1">
                                                <input className="radioInput" id="check1" type="radio" />
                                                do 30kg
                                            </label>
                                            <label htmlFor="check2">
                                                <input className="radioInput" id="check2" type="radio" />
                                                powyżej 30kg
                                            </label>
                                            <label htmlFor="check3">
                                                <input className="radioInput" id="check3" type="radio" />
                                                waga niestandardowa
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                            <textarea
                                                type="text"
                                                required
                                                className="form-control w-100"
                                                name="message"
                                                id="message"
                                                cols="30"
                                                rows="9"
                                                // onFocus=""
                                                // onBlur={"Twoja wiadomość"}
                                                placeholder=" Twoja wiadomość"
                                            ></textarea>
                                            </div>
                                        </div>
                                        </div>
                                        <p>* - pola wymagane</p>
                                        {/* <div className="g-recaptcha" data-sitekey="6LeN7LAZAAAAAGpi2KhlAb6N4Mt7Jbf-UptdVfeC"></div> */}
                                        <div className="form-group mt-3">
                                        <button
                                            type="submit"
                                            className="read-more"
                                        >
                                            Wyślij
                                        </button>
                                        </div>
                                        <div className="status"></div>
                                        <div className="status-red"></div>
                                    </form>
                                </div>
                                    <div className="col-lg-4">
                                        <img className="imgFluid" src={wozek} alt=""/>
                                    </div>
                            </Row>
                        </Container>
                    </div>
                </div>
        </>
    )
};

export default PricesView;