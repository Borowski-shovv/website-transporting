import React from 'react';
import OwlCarousel from '../../components/OwlCarousel/Owldemo1';
import './GalleryView.css';
import Gallery from 'react-grid-gallery';
import { Container} from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";


// photos 
import photo1 from '../../assets/images/blog_1.jpg';
import photo2 from '../../assets/images/blog_2.jpg';
import photo3 from '../../assets/images/blog_3.jpg';
import photo4 from '../../assets/images/blog_4.jpg';
import photo5 from '../../assets/images/blog_5.jpg';

const IMAGES =
[{
        src: photo1,
        thumbnail: photo1,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
},
{
        src: photo2,
        thumbnail: photo2,
        thumbnailWidth: 420,
        thumbnailHeight: 212,

},
{
        src: photo3,
        thumbnail: photo3,
        thumbnailWidth: 420,
        thumbnailHeight: 212
},
{
    src: photo4,
    thumbnail: photo4,
    thumbnailWidth: 420,
    thumbnailHeight: 212,
},
{
    src: photo5,
    thumbnail: photo5,
    thumbnailWidth: 420,
    thumbnailHeight: 212,
},
{
    src: photo1,
    thumbnail: photo1,
    thumbnailWidth: 420,
    thumbnailHeight: 212,
},
{
    src: photo2,
    thumbnail: photo2,
    thumbnailWidth: 420,
    thumbnailHeight: 212,

},
{
    src: photo3,
    thumbnail: photo3,
    thumbnailWidth: 420,
    thumbnailHeight: 212
},
{
src: photo4,
thumbnail: photo4,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
{
src: photo5,
thumbnail: photo5,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
{
src: photo4,
thumbnail: photo4,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
{
src: photo5,
thumbnail: photo5,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
]
const FleetView = () => {
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
                <div className="load-screen1" ref={(el) => (screen = el)}></div>
            </div>
            <div data-barba="container" className="Home">
            <div ref={(el) => (body = el)} className="Headd">    
                <Navigation />
                <OwlCarousel />
                <div className="gallery-wrapper">
                    <Container>
                    <div className="section-title">
                    <h2>
                      Galeria
                    </h2>
                    </div>
                        <Gallery images={IMAGES}/>
                    </Container>                              
                </div>
            </div> 
            </div>
        </>
    )
}

export default FleetView;