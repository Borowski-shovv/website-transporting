import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './HowItWorks.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import '../../assets/icomoon/style.css';

const HowItWorks = () => {
    return (
        <div className={`${styles.siteSection} ${styles.bgImage} ${styles.overlay}`}>
        <Container className={styles.wrapper}>
          <Row className="justify-content-center mb-5">
            <Col md={7} className="text-center border-primary">             
              <div data-aos="fade" data-aos-delay="100" className={styles.sectionTitle}>
                  <h2>Jak działamy</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={4} className="mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
              <div className={styles.howItWorkItem}>
                <span className={styles.number}>1</span>
                <div className="how-it-work-body">
                <h3 className={styles.smallTitle}>Skontaktuj się z nami</h3>
                  <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p>
                  <ul className={`${styles.ulCheck} list-unstyled white`}>
                    <li className="text-white">Error minus sint nobis dolor</li>
                    <li className="text-white">Voluptatum porro expedita labore esse</li>
                    <li className="text-white">Voluptas unde sit pariatur earum</li>
                  </ul>
                </div>
              </div>
            </Col>
  
            <Col md={6} lg={4} className="mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                <div className={styles.howItWorkItem}>
                <span className={styles.number}>2</span>
                <div className="how-it-work-body">
                  <h3 className={styles.smallTitle}>Zamów kuriera</h3>
                  <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p>
                  <ul className={`${styles.ulCheck} list-unstyled white`}>
                    <li className="text-white">Error minus sint nobis dolor</li>
                    <li className="text-white">Voluptatum porro expedita labore esse</li>
                    <li className="text-white">Voluptas unde sit pariatur earum</li>
                  </ul>
                </div>
              </div>
            </Col>
  
            <Col md={6} lg={4} className="mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
                <div className={styles.howItWorkItem}>
                <span className={styles.number}>3</span>
                <div className="how-it-work-body">
                    <h3 className={styles.smallTitle}>Grzecznie czekaj xD</h3>
                  <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p>
                  <ul className={`${styles.ulCheck} list-unstyled white`}>
                    <li className="text-white">Error minus sint nobis dolor</li>
                    <li className="text-white">Voluptatum porro expedita labore esse</li>
                    <li className="text-white">Voluptas unde sit pariatur earum</li>
                  </ul>
                </div>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
  
    )
}

export default HowItWorks;