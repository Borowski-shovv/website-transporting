import React from 'react';
import Promobar from '../../components/Promobar/Promobar';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import HoverSection from '../../components/HoverSection/HoverSection'
import YoutubeSection from '../../components/YoutubeSection/YoutubeSection';
import CardSection from '../../components/CardsSection/CardSection';
import OwlCarousel from '../../components/OwlCarousel/Owldemo1';
import Navigation from '../../components/Navigation/Navigation'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

const HomeView = () => {
  // let anchorRef = useRef(null);
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      height: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, .3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut
      }
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: 'none'
        }
      });
    }
  });
  return (
    <>
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}>
        </div>
      </div>
      <div data-barba="container" className="Home">
        <div ref={(el) => (body = el)} className="Headd">
          <Navigation />
          <OwlCarousel />
          <CardSection />
          <Promobar />
          <HoverSection />
          <YoutubeSection />
          <HowItWorks />  
        </div>
      </div>
    </>
  );
};

export default HomeView;
