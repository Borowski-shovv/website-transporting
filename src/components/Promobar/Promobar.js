import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Promobar.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Promobar = () => {
  return (
    <div className={styles.promoBottomArea}>
      <div
        className={styles.promoBottomAreaBg}
        data-stellar-background-ratio="0.6"
      ></div>
      <Container>
        <Row>
          <Col
            md={{ span: 12, offset: 1 }}
            lg={{ span: 12, offset: 1 }}
            sm={12}
            xs={12}
            className={styles.textCenter}
          >
            <div className="container">
              <div className={styles.promBottomContent}>
                <h2>
                  Zbieramy przesyłki z całej Polski &amp; dostarczamy je na
                  terenie całej Szwecji
                </h2>
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
