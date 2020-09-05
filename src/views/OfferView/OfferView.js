import React from 'react';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import {Container, Row, Col} from 'react-bootstrap';
import serviceBg from '../../assets/images/service-cargo-bg.png';
import trasyImg from '../../assets/images/vectorrmap.svg';
import './OfferView.css';
import {Link} from 'react-router-dom';

const OfferView = () => {
    return (
        <>
            <section id="about">
                <Container>
                    <Row className="about-container">
                        <Col lg={{span:6, order: 1}}  xs={{order: 2}}>
                            <div className="section-title">
                                <h2>
                                    Usługi     
                                </h2>
                            </div>
                            <p>
                            Przy przewozie kilku ładunków przygotujemy dla Ciebie atrakcyjną ofertę cenową, skontaktuj się z nami e-mailowo lub telefonicznie aby poznać szczegóły. Serdecznie zapraszamy do współpracy!
                            </p>
                            <ul>
                                <li>Zapewniamy szybki i tani przewóz paczek na trasie Polska – Szwecja – Polska. </li>
                                <li>Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
                                <li>Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
                                <li>Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
                            </ul>
                        </Col>

                        <Col lg={{span: 6, order: 2}}>
                            <img
                                src={serviceBg}                                
                                alt=""
                            />
                            <Link to="/kontakt" className="reade-more">Kontakt</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="prices">
                <Container>
                    <Row>
                        <Col md={6} >
                            <table>
                                <thead>
                                    <tr>
                                        <th>Waga</th>
                                        <th>Cena</th>

                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>do 30kg</td>
                                    <td>120 zł lub 300 SEK</td>
                                </tr>
                                <tr>
                                    <td>Powyżej 30kg</td>
                                    <td>Cena ustalana indywidualnie</td>
                                </tr>
                                <tr>
                                    <td className="promo">Promocja </td>
                                    <td className="promo">Cena</td>
                                </tr>
                                <tr>
                                    <td className="promo">3 przesyłki 30kg</td>
                                    <td className="promo">600 SEK</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col md={6} >
                            <h3>Cennik</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae doloribus ipsum quibusdam possimus ipsam accusamus, fugiat minus eligendi labore magni doloremque, repellat ab omnis quae provident quas. Repellendus, doloremque?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae doloribus ipsum quibusdam possimus ipsam accusamus, fugiat minus eligendi labore magni doloremque, repellat ab omnis quae provident quas. Repellendus, doloremque?</p>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
            <ServicesSection />        
            <section className="map-section">
                <Container>
                    <Row>
                        <Col className="mapa-content col-lg-6  order-2">
                            <div className="section-title">
                                <h2>
                                    TRASY     
                                </h2>
                            </div>
                            <p>
                           Mapa przedstawia najczęściej pokonywane przez nas szlaki drogowe. w Szwecji jesteśmy w stanie dowieźć Twoją przesyłkę w każde miejsce
                            </p>
                            <ul>
                                <li>Dzięki doświadczeniu, które zdobyliśmy podczas lat pracy, wybieramy najbardziej optymalne trasy, abyś jak najkrócej czekał na swoją przesyłkę</li>
                                <li>Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
                                <li>Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
                                <li>Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
                            </ul>
                        </Col>

                        <Col lg={{span:6, order: 1}} sm={12} className="mapa" >
                            <img
                                src={trasyImg} 
                               
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default OfferView;