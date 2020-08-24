import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Owldemo.css';
import '../../assets/libraries/animate.css';

class Owldemo1 extends Component {
  render() {
    return (
      <div className="">
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
                    <h1>Kurierzy zrobią dla Ciebie zakupy</h1>
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
                    <h1>kKurierzy zrobią dla Ciebie zakupy</h1>
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
                    <h1>Kurierzy zrobią dla Ciebie zakupy</h1>
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
      </div>
    );
  }
}

export default Owldemo1;
