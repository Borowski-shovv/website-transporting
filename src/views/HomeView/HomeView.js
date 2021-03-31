import React from 'react';
import Carousel from  '../../components/Carousel/Carousel';
import BenefitsIconsSection from '../../components/BenefitsIcons/BenefitsIcons';
// import Promobar from '../../components/Promobar/Promobar';
// import HowItWorks from '../../components/HowItWorks/HowItWorks';
// import HoverSection from '../../components/HoverSection/HoverSection'
// import CardSection from '../../components/CardsSection/CardSection';
// import OwlCarousel from '../../components/OwlCarousel/Owldemo1';
// import Navigation from '../../components/Navigation/Navigation'
// import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
// import { useRef, useEffect } from "react";

const HomeView = () => {
 
  return (
    <>
          <Carousel />
          <BenefitsIconsSection />
          {/* 
          <CardSection />
          <Promobar />
          <HoverSection /> */}
    </>
  );
};

export default HomeView;
