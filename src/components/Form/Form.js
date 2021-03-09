// import React, {useState} from 'react';
// import axios from "axios";
// // import {Container, Row} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import ReCAPTCHA from "react-google-recaptcha";
// // import './Form.css';

// const Form = () => {
//     const [mailSent, setmailSent] = useState(false);
//     const [error, setError] = useState(null);
//     const [inputName, setInputName] = useState('');
//     const [inputEmail, setInputEmail] = useState('');
//     const [inputMsg, setInputMsg] = useState('');
//     const [formData, setFormData] = useState({});

//     const onChange = (value) => {
//       console.log("Captcha value:", value)
//     }

//     const handleFormSubmit = e => { 
//         e.preventDefault();
//         axios({
//           method: "post",
//           url: `${process.env.REACT_APP_API}`,
//           headers: { "content-type": "application/json" },
//           data: formData
//         })
//           .then(result => {
//             if (result.data.sent) {
//               setmailSent(result.data.sent)
//               setError(false)
//             } else {
//               setError(true)
//             }
//           })
//           .catch(error => setError( error.message ));
//           setInputName('');
//           setInputMsg('');
//           setInputEmail('');
//           setFormData({});
//       };

//       const handleChange = (e, field) => {
//         let value = e.target.value;
//         switch(field) {
//           case 'name':
//             setInputName(e.target.value)
//           break;
//           case 'email':
//             setInputEmail(e.target.value)
//           break;
//           case 'msg':  
//             setInputMsg(e.target.value)
//           break;
//           default:
//             break;
//         }
//         setFormData({
//           ...formData,
//           [field]: value,
//         });
//       };
 
//     return (
//         <div className="form-wrapper">
//         <Container>
//           <Row>
//         <div className="col-lg-8">
//             <div className="section-title">
//               <h2 className="text-primary">Napisz do nas</h2>
//             </div>
//           <form action="#">
//             <Row>                          
//                          <div className="col-sm-6">
//                             <div className="form-group">
//                               <input
//                                 type="text"
//                                 className="form-control valid"
//                                 placeholder= "Twoje imię i nazwisko"
//                                 name="name"
//                                 id="1"                                
//                                 value={inputName}                                
//                                 onChange={e => handleChange(e, 'name')}
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-sm-6">
//                             <div className="form-group">
//                               <input
//                                 type="email"
//                                 className="form-control valid"
//                                 placeholder= "Email"
//                                 name="email"
//                                 id="3"                                
//                                 value={inputEmail}                                
//                                 onChange={e => handleChange(e, 'email')}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12">
//                             <div className="form-group">
//                             <textarea  
//                               cols="30"
//                               rows="9" 
//                               name="msg"
//                               id="4"  
//                               className="form-control w-100" 
//                               placeholder="Twoja wiadmość" 
//                               onChange={e => handleChange(e, "msg")} 
//                               value={inputMsg}
//                               required
//                               />
//                             </div>
//                           </div>    

//             </Row>
//             <div className="form-group mt-3">
//             <ReCAPTCHA
//                 sitekey="Your client site key"
//                 onChange={onChange}
//               />,
//               <input className="read-more" type="submit" onClick={e => handleFormSubmit(e)} value="Wyślij" />
//             </div>
//             <div>
//               {mailSent && <div className="success">Twoja wiadomość została pomyślnie wysłana</div>}
//               {error && <div className="error">Uzupełnij wszystkie wymagane pola</div>}
//             </div>
//           </form>
//         </div>
//         <div className="col-lg-3 offset-lg-1">
//                         <div className="media contact-info">
//                             <span className="contact-info__icon"><i className="ti-home"></i></span>
//                             <div className="media-body">
//                             <h3>Białystok, Polska.</h3>
//                             <p>ul. Strzelecka 6</p>
//                             </div>
//                         </div>
//                         <div className="media contact-info">
//                             <span className="contact-info__icon"
//                             ><i className="ti-tablet"></i
//                             ></span>
//                             <div className="media-body">
//                             <a href="tel:+48713333222">
//                                 <h3>+48 735 130 862</h3>
//                             </a>
//                             <a href="tel:+48713333222">
//                                 <h3>+46 764 012 966</h3>
//                             </a>                              
//                             <p>Poniedziałek - Sobota <br></br> 8:00 - 16:00</p>
//                             </div>
//                         </div>
//                         <div className="media contact-info">
//                             <span className="contact-info__icon"><i className="ti-email"></i></span>
//                             <div className="media-body">
//                                 <p className="email-contact">biuro@transport-szwecja.com</p>
//                                 <p>Wyślij do nas wiadomość!</p>
//                             </div>
//                         </div>
//                         <div className="media contact-info">
//                             <Link style={{display: 'flex'}}    
//                                 target="_blank" 
//                                 to={{pathname: "https://www.facebook.com/solidfachtransport"}}
//                             >
//                                 <span className="contact-info__icon"><i className="fa fa-facebook"></i></span>
//                                 <div className="media-body" style={{paddingLeft: '14px'}}>
//                                     <h3>fb/solidfachtransport</h3>
//                                     <p>Sprawdź nas na facebooku!</p>
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="media contact-info">
//                             <Link style={{display: 'flex'}}  
//                                 target="_blank" 
//                                 to={{pathname: "https://www.instagram.com/solidfach_plse"}}>
//                                 <span className="contact-info__icon" ><i className="fa fa-instagram"></i></span>
//                                 <div className="media-body">
//                                 <h3>@solidfach_plse</h3>
//                                 <p>Sprawdź nasz Instagram!</p>
//                                 </div>
//                             </Link>                        
//                         </div>
//                         </div>
//         </Row>
//         </Container>
//       </div>
//     )

// }
 


// export default Form;