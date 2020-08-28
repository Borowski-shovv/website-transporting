import React from 'react';
import Owldemo1 from '../../components/OwlCarousel/Owldemo1';
import HeroSection from '../../components/HeroSection/HeroSection';
import Promobar from '../../components/Promobar/Promobar';
import styles from './HomeView.module.scss';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import HoverSection from '../../components/HoverSection/HoverSection'
import YoutubeSection from '../../components/YoutubeSection/YoutubeSection';

const HomeView = () => {
  // let anchorRef = useRef(null);

  return (
    <>

      <Owldemo1 />
      <HoverSection />
      <HeroSection />
      <YoutubeSection />
      {/* <Promobar /> */}
      <HowItWorks />
      <BenefitsSection />
    </>
  );
};

export default HomeView;
