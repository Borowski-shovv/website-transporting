import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopArea.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const TopArea = ({children}) => {
  return (
    <header className={styles.topAreaSinglePage} id="home">
      <div
        className={styles.topAreaBg}
        data-stellar-background-ratio="0.6"
      ></div>
      <div className={styles.headerTopArea}></div>
      <div className={styles.welcomeArea}>
        <Container>
          <Row className={styles.flexCenter}>
            <Col md={12} lg={12} sm={12} xs={12}>
              <div className={styles.welcomeText}>
                <h2>{children}</h2>
                <ul className={styles.pageLocation}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default TopArea;
