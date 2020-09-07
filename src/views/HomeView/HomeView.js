import React from 'react';
import Promobar from '../../components/Promobar/Promobar';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import HoverSection from '../../components/HoverSection/HoverSection'
import YoutubeSection from '../../components/YoutubeSection/YoutubeSection';
import CardSection from '../../components/CardsSection/CardSection';
import OwlCarousel from '../../components/OwlCarousel/Owldemo1'

const HomeView = () => {
  // let anchorRef = useRef(null);

  return (
    <>
      <OwlCarousel />
      <CardSection />
      <Promobar />
      <HoverSection />
      <YoutubeSection />
      <HowItWorks />
    </>
  );
};

export default HomeView;
