import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3, gsap } from 'gsap';
import styles from './HeroSection.module.scss';
import Truck2 from '../../assets/images/img_1.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../Layout';
import SectionTitle from '../SectionTitle/SectionTitle';

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
        trigger: app,
        start: 'top bottom',
      },
    });

    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    tl.from(truck1Image, 2.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(
        truck1Image.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      // .from(truck2Image, 2.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      // .from(
      //   truck2Image.firstElementChild,
      //   2,
      //   { scale: 1.6, ease: Power3.easeOut },
      //   0.2
      //);

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
    <Layout>
      <section
        id="hero"
        className={styles.hero}
        data-section-1
        ref={(el) => (app = el)}
      >
        <SectionTitle>Usługi transportowe - Szwecja - Polska</SectionTitle>
        <div className={styles.heroContainer}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div
                className={styles.heroContentInner}
                ref={(el) => (content = el)}
              >
                <h1>
                  <div className={styles.heroContentLine}>
                    <div className={styles.heroContentLineInner}>
                      Usługi transportowe
                    </div>
                  </div>
                  <div className={styles.heroContentLine}>
                    <div className={styles.heroContentLineInner}>
                      Kurierzy zrobią zakupy
                    </div>
                  </div>
                  <div className={styles.heroContentLine}>
                    <div className={styles.heroContentLineInner}>
                      Przeprowadzki
                    </div>
                  </div>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className={styles.btnRow}>
                  <button>
                    sprawdź
                    {/* <div className="arrow-icon">
                      <i className="fa fa-arrow-right"></i>
                    </div> */}
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.heroImages}>
              <div
                className={styles.heroImagesInner}
                ref={(el) => (images = el)}
              >
                <div className={`${styles.heroImage} ${styles.truck1}`}>
                  <img src={Truck2} alt="" />
                </div>
                {/* <div className={`${styles.heroImage} ${styles.truck2}`}>
                  <img src={Truck2} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HeroSection;
