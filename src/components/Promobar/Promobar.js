import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Promobar.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Promobar = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  });

  return (
    <div data-aos="fade-up" className={styles.promoBottomArea}>
      <div
        className={styles.promoBottomAreaBg}
        data-stellar-background-ratio="0.6"
      ></div>
      <Container>
        <Row>
          <Col
            md={{ span: 12 }}
            lg={{ span: 12 }}
            sm={12}
            xs={12}
            className={styles.textCenter}
          >
            <div className="container">
              <div className={styles.promBottomContent}>
                <h3 className={styles.promoTitle}>Skontaktuj się z nami</h3>
                <p>
                  Zbieramy przesyłki z całej Polski &amp; dostarczamy je na
                  terenie całej Szwecji
                </p>
                <Link to="/" className={styles.readMore}>
                  Kontakt
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Promobar;
