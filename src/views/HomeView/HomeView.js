import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Promobar from '../../components/Promobar/Promobar';
import styles from './HomeView.module.scss';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
// import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import HoverSection from '../../components/HoverSection/HoverSection'
import YoutubeSection from '../../components/YoutubeSection/YoutubeSection';
import CardSection from '../../components/CardsSection/CardSection';

const HomeView = () => {
  // let anchorRef = useRef(null);

  return (
    <>

    
      <CardSection />
      <Promobar />
      <HoverSection />
      <HeroSection />
      <YoutubeSection />
      {/* <Promobar /> */}
      <HowItWorks />
    </>
  );
};

export default HomeView;
