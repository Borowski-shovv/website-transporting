import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import logoShovv from '../../assets/images/made-by-shovv.png';
import solidFach from '../../assets/images/solidfach.svg';

const Footer = () => {
 return (
     <>
	<div className="module-small shop_isle_footer_sidebar">
		<div className="container">
			
			<div className="row pt-30 pb-30 footer-section-wrapper">
				<div className="col-sm-6 col-md-3 footer-sidebar-wrap footer-contact-part">
					<h3>Kontakt</h3>
					<p><i className="fa fa-home"></i>ul. Strzelecka 6, <br></br>15-345 Białystok</p>
					<p><i className="fa fa-phone"></i>+48 735 130 862</p>					
					<p><i className="fa fa-phone"></i>+46 764 012 966</p>					
					<p><i className="fa fa-envelope"></i>biuro@transport-szwecja.com</p>
				</div>
				<div className="col-sm-6 col-md-3 footer-sidebar-wrap footer-help-part">
                        <h3>
                            Informacje i pomoc
                        </h3>
						<p>
							<Link to="">Regulamin</Link>
						</p>
						<p>
							<Link to="">Polityka prywatności</Link>
						</p>
                        <p>
							<Link to="">Kontakt</Link>
                        </p>
				</div>
                	<div className="col-sm-6 col-md-3 footer-sidebar-wrap footer-contact-part">
					<h3>Godziny otwarcia</h3>
					<p>Poniedziałek: 8:00 - 16:00 </p>
					<p>Wtorek: 8:00 - 16:00 </p>					
					<p>Środa: 8:00 - 16:00 </p>					
					<p>Czwartek: 8:00 - 16:00 </p>
					<p>Piątek: 8:00 - 16:00 </p>
					<p>Sobota: 8:00 - 16:00 </p>
				</div>
				<div className="col-sm-6 col-md-3 footer-sidebar-wrap">			
					<img className="footer-logo" src={solidFach} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat accusamus, error, excepturi et magnam voluptatum repellendus maxime quas soluta possimus vel adipisci repudiandae quod. Sint voluptatibus vitae reprehenderit obcaecati</p>
				</div>
            </div>
        </div>
        <div className="manufacturer-wrapper" >
        <div className="container">            
                    <div className="manufacturer">
                        <div className="footer-copyright">Copyright &copy; 2020 Wszelkie prawa zastrzeżone</div>
                        <div className="shovv-logo">
                        WDROŻENIE:

                        <Link
                        to="https://shovv.pl"
                        target="_blank"
                        title="Fotografia reklamowa i strony internetowe Białystok"
                        ><img src={logoShovv} alt="SHOVV - Fotografia"
                        /></Link>
                        </div>
                    </div>           
            </div>
        </div>
	</div> 
    </>
 )
};

export default Footer;