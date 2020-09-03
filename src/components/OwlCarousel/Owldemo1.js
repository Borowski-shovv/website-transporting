import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Owldemo.css';
import '../../assets/libraries/animate.css';
import '../../assets/libraries/font-awesome.min.css';



class Owldemo1 extends Component {
  render() {
    return (
      <>
 
        <OwlCarousel
          items={1}
          className="owl-theme welcome-slider-area"
          autoplay={true}
          loop
          dots={false}
        >
          <div className="welcome-single-slide slider-bg-one">
            <div className="container">
              <div className="row flex-v-center">
                <div className="col-md-10 col-md-offset-1">
                  <div className="welcome-text text-center">
                    <h2>Kurierzy zrobią dla Ciebie zakupy</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="home-button">
                      <Link to="/">Cennik</Link>
                      <Link to="/">Kontakt</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-single-slide slider-bg-two">
            <div className="container">
              <div className="row flex-v-center">
                <div className="col-md-10 col-md-offset-1">
                  <div className="welcome-text text-center">
                    <h2>Rysia zrobi dla Ciebie zakupy</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="home-button">
                      <Link to="/">Cennik</Link>
                      <Link to="/">Kontakt</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-single-slide slider-bg-three">
            <div className="container">
              <div className="row flex-v-center">
                <div className="col-md-10 col-md-offset-1">
                  <div className="welcome-text text-center">
                    <h2>Kurierzy zrobią dla Ciebie zakupy</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="home-button">
                      <Link to="/">Cennik</Link>
                      <Link to="/">Kontakt</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </>
    );
  }
}

export default Owldemo1;
