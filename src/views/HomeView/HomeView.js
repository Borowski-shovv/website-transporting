import React from 'react';
import Carousel from  '../../components/Carousel/Carousel';
import BenefitsIconsSection from '../../components/BenefitsIcons/BenefitsIcons';
import CardSection from '../../components/Home-CardsSection/CardSection';
import Promobar from '../../components/Promobar/Promobar';
import OfferSection from '../../components/OfferSection/OfferSection';
// import HowItWorks from '../../components/HowItWorks/HowItWorks';
// import HoverSection from '../../components/HoverSection/HoverSection'
// import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
// import { useRef, useEffect } from "react";

const HomeView = () => {
  return (
    <>
          <Carousel />
          <CardSection />
          <Promobar />
          <OfferSection />
          <BenefitsIconsSection />
          {/* 
          <HoverSection /> */}
    </>
  );
};

export default HomeView;
