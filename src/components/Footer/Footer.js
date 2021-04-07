import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import logoShovv from '../../assets/images/made-by-shovv.png';
import solidFach from '../../assets/images/solidfach.svg';
import '../../assets/libraries/font-awesome.min.css';
import { Grid, Container } from '@material-ui/core'

const Footer = () => {
 return ( 
		<div className='my-footer'>
			<Container>
				<Grid container spacing={3} justify="center">
						<Grid item container>
							<Grid item xs={12} sm={6} md={3} className="footer-sidebar-wrap">
								<h3>Kontakt</h3>
								<p><i className="fa fa-home"></i>ul. Strzelecka 6, <br></br>15-345 Białystok</p>
								<a href="tel:+48735130862"><i className="fa fa-phone"></i>+48 735 130 862</a>					
								<a href="tel:+48764012966"><i className="fa fa-phone"></i>+46 764 012 966</a>					
								<a href="mailto:biuro@transport-szwecja.com"><i className="fa fa-envelope"></i>biuro@transport-szwecja.com</a>
							</Grid>
							<Grid item container xs={12} sm={6} md={3} className="footer-sidebar-wrap">
									<h3>
										Informacje i pomoc
									</h3>
									<Link to="/wycena">Złóż zamówienie</Link>
									
									<Link to="/regulamin">Regulamin</Link>
								
									<Link to="/polityka-prywatnosci">Polityka prywatności</Link>
									
									<Link to="/kontakt">Kontakt</Link>
							</Grid>
							<Grid item xs={12} sm={6} md={3} className="footer-sidebar-wrap">
								<h3>Godziny otwarcia</h3>
								<p>Poniedziałek: 8:00 - 16:00 </p>
								<p>Wtorek: 8:00 - 16:00 </p>					
								<p>Środa: 8:00 - 16:00 </p>					
								<p>Czwartek: 8:00 - 16:00 </p>
								<p>Piątek: 8:00 - 16:00 </p>
								<p>Sobota: 8:00 - 16:00 </p>
							</Grid>
							<Grid item xs={12} sm={6} md={3} className=" footer-sidebar-wrap">			
								<img className="footer-logo" src={solidFach} alt="" />
								<p>SOLIDFACH jesteśmy solidną firmą, nasze zasady: zawsze na czas, bezpiecznie i fachowo</p>
								<div className="social-buttons">
									<Link to={{pathname: "https://www.facebook.com/solidfachtransport"}} target="_blank"><i className="fa fa-facebook"></i></Link>
									<Link to={{pathname: "https://www.instagram.com/solidfach_plse/"}} target="_blank"><i className="fa fa-instagram"></i></Link>
								</div>
							</Grid>
						</Grid>
	
					        
								<div className="manufacturer">
									<div className="footer-copyright">Copyright &copy; 2020 Wszelkie prawa zastrzeżone</div>
									<div className="shovv-logo">
									PROJEKT I REALIZACJA:

									<Link
										to={{pathname: "https://shovv.pl"}}
										target="_blank"
										title="Fotografia reklamowa i strony internetowe Białystok"
										>
											<img src={logoShovv} alt="SHOVV - Fotografia"
									/></Link>
								</div>
						          
						</div>
					
				</Grid>
			</Container>
		</div>
 )
};

export default Footer;