import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/flaticon/font/flaticon.css'
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <div className="site-section bg-light">
        <Container>
          <Row className="align-items-stretch">
            <Col md={6} lg={4} >
              <div className="unit-4">
                <div className="unit-4-icon"><span className="flaticon-frontal-truck"></span></div>
                <div>
                  <h3>TRANSPORT MEBLI</h3>
                  <p>Przewozimy meble z Polski do Szwecji i ze Szwecji do Polski. Kanapy, sofy, komody, meblościanki, krzesła, fotele, szafy, stolarkę kuchenną, meble łazienkowe, lustra, blaty kamienne oraz inne. Aby poznać szczegóły oferty skontaktuj się z nami e-mailowo bądź też telefonicznie.</p>
                  
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}  >
              <div className="unit-4 ">
                <div className="unit-4-icon"><span className="flaticon-travel"></span></div>
                <div>
                  <h3>TRANSPORT EKSPRESOWY</h3>
                  <p>Niezależnie od tego co chcesz przewieźć, chętnie Ci w tym pomożemy. W ekspresowych sprawach sugerujemy kontakt telefoniczny.
                    Zadzwoń i przedstaw sytuacje, na pewno uda się nam Tobie pomóc.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="unit-4 ">
                <div className="unit-4-icon"><span className="flaticon-car"></span></div>
                <div>
                  <h3>TRANSPORT DROBNICOWY</h3>
                  <p>Przewozimy wszystkie legalne ładunki, części samochodowe, zwierzęta, meble, sprzęt RTV / AGD oraz inne. 

                    Przy przewozie kilku ładunków przygotujemy dla Ciebie atrakcyjną ofertę cenową, skontaktuj się z nami e-mailowo lub telefonicznie aby poznać szczegóły. Serdecznie zapraszamy do współpracy!</p>
                  
                </div>
              </div>
            </Col>

            <Col md={6} lg={4}  >
              <div className="unit-4 ">
                <div className="unit-4-icon"><span className="flaticon-barn"></span></div>
                <div>
                  <h3>PRZEPROWADZKI</h3>
                  <p>Świadczymy kompleksowe usługi transportowe przy przeprowadzkach ze Szwecji do Polski, z Polski do Szwecji oraz przeprowadzki na terenie Białegostoku.
                  Nasi kurierzy pomagają przy rozładunku i załadunku. Serdecznie zapraszamy do współpracy!
                  </p>
                  
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="unit-4 ">
                <div className="unit-4-icon"><span className="flaticon-platform"></span></div>
                <div>
                  <h3>TRANSPORT PALETOWY</h3>
                  <p>Wysłania towaru na paletach dzięki naszej obsłudze jest niezwykle proste, wystarczy się z nami skontaktować, podać przybliżoną wagę palety, wymiary (szerokość, wysokość, długość), przygotujemy dla Państwa indywidualną ofertę. Nasz kurier odbierze od was nadawany towar i pomoże przy załadunku.</p>
                  
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="unit-4 ">
                <div className="unit-4-icon"><span className="flaticon-frontal-truck"></span></div>
                <div>
                  <h3>TRANSPORT PONADGABARYTOWY</h3>
                  <p>Auta, które wchodzą w skład naszej floty umożliwiają przewóz ponadwymiarowych, niestandardowych ładunków tj. szyby i lustra w dużych taflach, okna i okiennice xxl, blaty marmurowe, kamienne, meble oraz inne.</p>

                </div>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
    );
}

export default ServicesSection;