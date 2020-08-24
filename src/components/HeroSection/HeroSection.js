import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3, gsap } from 'gsap';
import './HeroSection.css';
import Truck2 from '../../assets/images/hero2-truck.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    const truck1Image = images.firstElementChild;
    const truck2Image = images.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    let tl = new TimelineLite({
      paused: true,
      scrollTrigger: {
        trigger: '.hero',
        start: 'center bottom',
      },
    });

    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    tl.from(truck1Image, 1.2, { y: 1280, ease: Power3.easeOut })
      .from(
        truck1Image.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(truck2Image, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        truck2Image.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      0.15,
      'Start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  });

  return (
    <section className="hero" data-section-1 ref={(el) => (app = el)}>
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner h1-line-1">
                    Usługi transportowe
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner h1-line-2">
                    Kurierzy zrobią zakupy
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner h1-line-3">
                    Przeprowadzki
                  </div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  sprawdź
                  <div className="arrow-icon">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={(el) => (images = el)}>
              <div className="hero-image truck-1">
                <img src={Truck2} alt="" />
              </div>
              <div className="hero-image truck-2">
                <img src={Truck2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
