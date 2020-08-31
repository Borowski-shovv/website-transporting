import React, { useRef, useEffect} from 'react';
import Truck3 from '../../assets/images/truck3.jpg';
import Truck2 from '../../assets/images/slider1.jpg';
import Truck1 from '../../assets/images/slider2.jpg';
// import Truck0 from '../../assets/images/slider3.jpg';
import './HoverSection.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const solutions = [
    {
        name: "Transport Mebli", image: Truck3
    },
    {
        name: "Przeprowadzki", image: Truck3
    },
    {
        name: "Transport drobnicowy", image: Truck2
    },
    {
        name: "Transport ponadgabarytowy", image: Truck1
    },
    {
        name: "Transport Ekspresowy", image: Truck3
    },
];

// adds city image once you hover on
const handleCity = (city, target) => {
    gsap.to(target, {
      duration: 0,
      background: `url(${city})`,
    
    });
    gsap.to(target, {
      duration: 1.6,
      opacity: 1,
      ease: "power3.inOut",
      backgroundSize: "cover",
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

      useEffect(() => {
        AOS.init(); 
        AOS.refresh(); 
      })
    return (
        <section className="banner-categories section-team" >
        <div className="banner-collections">
            <div className="collection-wrapper" data-aos="zoom-in-right" data-aos-duration="1000">
              
                <div className="collection-content color-banner" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="collection-content-wrapper">
                        <div className="collection-content-text">
                            <h4 className="content-header">Oferta</h4>
                            <p className="content-header-description">Dostarczamy zamówienie<br></br> <span className="description-span">w każdy</span> region Polski i Szwecji</p>
                            <p className="content-paragraph team-desc"></p>
                            <div className="solutions">
                                {solutions.map(el => (
                                    <span
                                        key={el.name}
                                        onMouseEnter={() => handleCity(el.image, changingPhoto)}
                                        onMouseOut={() => handleCityReturn(changingPhoto)} 
                                        className="solutions-truck"
                                        >
                                        {el.name}
                                    </span>
                                ))}
                            </div>
                            <Link className="collection-button" to="oferta">Sprawdź pełną ofertę</Link>
                        </div>
                    </div>
                </div>
                <div className="photo-wrapper">
                    <div ref={el => (changingPhoto = el)} className="photo"></div>
                </div>	
            </div>
        </div>
</section>
    )
};

export default HoverSection;