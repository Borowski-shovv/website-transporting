import React, { useRef, useEffect} from 'react';
import Truck3 from '../../assets/images/truck3.jpg';
import Truck2 from '../../assets/images/slider1.jpg';
import Truck1 from '../../assets/images/slider2.jpg';
import Truck0 from '../../assets/images/slider3.jpg';
import './HoverSection.css';
import { gsap } from 'gsap';

const solutions = [
    {
        name: "Przeprowadzki", image: Truck3
    },
    {
        name: "Przewóz drobnicowy", image: Truck2
    },
    {
        name: "Przewóz ponadgabarytowy", image: Truck1
    }
];

// adds city image once you hover on
const handleCity = (city, target) => {
    gsap.to(target, {
      duration: 0,
      background: `url(${city}) bottom center`,
      backgroundSize: 'cover',
    });
    gsap.to(target, {
      duration: 1.6,
      opacity: 1,
      ease: "power3.inOut",
      y: 10
    });
    gsap.from(target, {
      duration: 2.4,
      transformOrigin: "right top",
    });
  };

  
  //Removes the city image once you hover off
   const handleCityReturn = target => {
    gsap.to(target, {
        duration: 1,
        skew: 0,
        y: 0,
    });
   }

  
  const HoverSection = () => {
      
      let changingPhoto = useRef(null);

    return (
        <section className="banner-categories section-team" >
        <div className="banner-collections">
            <div className="collection-wrapper">
            <div className="photo-wrapper">
                <div ref={el => (changingPhoto = el)} className="photo lazy">
                    {/* <img src={Truck0} alt=""/>  */}
                </div>
                
            </div>		
            <div className="collection-content color-banner" >
                <div className="collection-content-wrapper">
                <div className="collection-content-text">
                    <h4 className="content-header">ZAUFAJ NASZEMU DOŚWIADCZENIU</h4>
                    <p className="content-paragraph team-desc"></p>
                    <div className="solutions">
                        {solutions.map(el => (
                            <span
                                key={el.name}
                                onMouseEnter={() => handleCity(el.image, changingPhoto)}
                                onMouseOut={() => handleCityReturn(changingPhoto)} 
                                >
                                {el.name}
                            </span>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
</section>
    )
};

export default HoverSection;