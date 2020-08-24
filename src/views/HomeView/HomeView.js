import React from 'react';
import Owldemo1 from '../../components/OwlCarousel/Owldemo1';
import HeroSection from '../../components/HeroSection/HeroSection';
import Promobar from '../../components/Promobar/Promobar';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './HomeView.module.scss';

const HomeView = () => {
  // let anchorRef = useRef(null);

  return (
    <>
      <Owldemo1 />
      <Link
        activeClass={`${HeroSection}`}
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.scrollDownBtn}
      >
        <span></span>
      </Link>
      <HeroSection />
      <Promobar />
    </>
  );
};

export default HomeView;
