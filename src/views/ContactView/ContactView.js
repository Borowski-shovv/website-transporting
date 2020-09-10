import React, { useRef, useEffect} from 'react';
import './ContactView.css';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import OwlCarousel from '../../components/OwlCarousel/Owldemo1';
import Navigation from '../../components/Navigation/Navigation';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import Form from '../../components/Form/Form';

const ContactView = () =>  {

    const config = {
        api: `${process.env.REACT_APP_API}`,
        title: 'Contact Me',
        description: 'Write us about your request, We\'ll get back to you within 24 hours.',
        successMessage: 'Thank you for contcting me.',
        errorMessage: 'Please Fill the complete form',
        fields:{
          firstName: '',
          lastName: '',
          email: '',
          msg: ''
        },
        fieldsConfig:  [
         { id: 1, label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , klassName:'first-name-field'},
         { id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , klassName:'last-name-field'},
         { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , klassName:'email-field'},
         { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , klassName:'message-field'}
        ]
      }
    
    let myIcons = L.icon({
        iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41],
    })
    
 
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
    
        const position = [53.1102821, 23.1358131]
        return (
            <>
                <div className="load-container">
                <div className="load-screen1" ref={(el) => (screen = el)}></div>
                </div>
                <div data-barba="container" className="Home">
                <div ref={(el) => (body = el)} className="Headd">
                <Navigation />
                <OwlCarousel />
                <div className="form-wrapper"> 
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="section-title">
                                <h2 className="text-primary">Napisz do nas</h2>
                            </div>
                        </Col>
                        <div className="col-lg-8">
                        <form
                            className="form-contact contact_form"
                            action="?"
                            method="post"
                            id="contactForm"
                            autoComplete="off"                            
                        >
                            <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                <textarea
                                    type="text"
                                    required
                                    className="form-control w-100"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="9"
                                    // onFocus=""
                                    // onBlur={"Twoja wiadomość"}
                                    placeholder=" Twoja wiadomość"
                                ></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <input
                                    className="form-control valid"
                                    name="name"
                                    id="name"
                                    type="text"
                                    // onFocus="this.placeholder = ''"
                                    // onBlur="this.placeholder = 'Twoje imię'"
                                    placeholder="Twoje imię"
                                />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <input
                                    className="form-control valid"
                                    name="email"
                                    id="email"
                                    type="email"
                                    required
                                    // onFocus="this.placeholder = ''"
                                    // onBlur="this.placeholder = 'Email'"
                                    placeholder="Email"
                                />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                <input
                                    className="form-control"
                                    required
                                    name="subject"
                                    id="subject"
                                    type="text"
                                    // onFocus="this.placeholder = ''"
                                    // onBlur="this.placeholder = 'Temat wiadomości'"
                                    placeholder="Temat wiadomości"
                                />
                                </div>
                            </div>
                            </div>
                            {/* <div className="g-recaptcha" data-sitekey="6LeN7LAZAAAAAGpi2KhlAb6N4Mt7Jbf-UptdVfeC"></div> */}
                            <div className="form-group mt-3">
                            <button
                                type="submit"
                                className="read-more"
                            >
                                Wyślij
                            </button>
                            </div>
                            <div className="status"></div>
                            <div className="status-red"></div>
                        </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                            <h3>Białystok, Polska.</h3>
                            <p>ul. Strzelecka 6</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"
                            ><i className="ti-tablet"></i
                            ></span>
                            <div className="media-body">
                            <a href="tel:+48713333222">
                                <h3>+48 735 130 862</h3>
                            </a>
                            <a href="tel:+48713333222">
                                <h3>+46 764 012 966</h3>
                            </a>                              
                            <p>Poniedziałek - Sobota <br></br> 8:00 - 16:00</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <p className="email-contact">biuro@transport-szwecja.com</p>
                                <p>Wyślij do nas wiadomość!</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <Link style={{display: 'flex'}}    
                                target="_blank" 
                                to={{pathname: "https://www.facebook.com/solidfachtransport"}}
                            >
                                <span className="contact-info__icon"><i className="fa fa-facebook"></i></span>
                                <div className="media-body" style={{paddingLeft: '14px'}}>
                                    <h3>fb/solidfachtransport</h3>
                                    <p>Sprawdź nas na facebooku!</p>
                                </div>
                            </Link>
                        </div>
                        <div className="media contact-info">
                            <Link style={{display: 'flex'}}  
                                target="_blank" 
                                to={{pathname: "https://www.instagram.com/solidfach_plse"}}>
                                <span className="contact-info__icon" ><i className="fa fa-instagram"></i></span>
                                <div className="media-body">
                                <h3>@solidfach_plse</h3>
                                <p>Sprawdź nasz Instagram!</p>
                                </div>
                            </Link>                        
                        </div>
                        </div>
                    </Row>
            </Container>
                </div>
                 <Map className="map" center={position} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={myIcons}>
                        <Popup>
                            ul. Strzelecka 6 <br /> 15-345.
                        </Popup>
                        </Marker>
                    </Map> 
                <Form config={config}/>

                </div>
                </div>
                </>
        )
    
}


export default ContactView;
