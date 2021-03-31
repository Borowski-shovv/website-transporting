import React, {useEffect} from 'react'
import { Container, Grid } from '@material-ui/core';
import styles from './BenefitsIconsSection.module.scss';
import '../../assets/icomoon/style.css';
// import AOS from 'aos';


import parcel from '../../assets/images/parcel-white.svg';
import phone from '../../assets/images/phone-white.svg';
import truck from '../../assets/images/benefit-truck-white.svg';
import money from '../../assets/images/money-white.svg';


const BenefitsIconsSection = () => {
  useEffect(() => {
    // AOS.init(); 
    // AOS.refresh(); 
  })
    return (
        <div className={`${styles.siteSection} ${styles.bgImage} ${styles.overlay}`}>
            <Container className={styles.wrapper}>
                <Grid container spacing={3} direction="column" justify="center" alignItems="center">

                    <Grid container item xs={12} justify="center" className="justify-content-center mb-5">
                                 
                            <div data-aos="fade" data-aos-delay="100" className={styles.sectionTitle}>
                                <h2>Jak działamy</h2>
                            </div>
                       
                    </Grid>

                    <Grid container item xs={12}  justify="center" spacing={3}>
                        <Grid container item xs={12} sm={4} data-aos="fade" data-aos-delay="100">
                            <div className={styles.howItWorkItem}>
                                <span className={styles.number}>1</span>
                                <div className="how-it-work-body">
                                    <h3 className={styles.smallTitle}>Skontaktuj się z nami</h3>
                                    <p className="mb-5">Poznaj szczegóły, wycenę transportu Twoich przedmiotów </p>
                                    <ul className={`${styles.ulCheck} list-unstyled white`}>
                                        <li className="">Rzetelna wycena</li>
                                        <li className="text-white">Brak ukrytych kosztów</li>
                                        <li className="text-white">Voluptas unde sit pariatur earum</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
            
                        <Grid container item xs={12} sm={4} data-aos="fade" data-aos-delay="200">
                            <div className={styles.howItWorkItem}>
                            <span className={styles.number}>2</span>
                            <div className="how-it-work-body">
                            <h3 className={styles.smallTitle}>Zamów kuriera</h3>
                            <p className="mb-5">Ustalmy miejsce wydania i załadunku Twoich przedmiotów</p>
                            <ul className={`${styles.ulCheck} list-unstyled white`}>
                                <li className="text-white">Error minus sint nobis dolor</li>
                                <li className="text-white">Voluptatum porro expedita labore esse</li>
                                <li className="text-white">Voluptas unde sit pariatur earum</li>
                            </ul>
                            </div>
                        </div>
                        </Grid>
            
                        <Grid container item xs={12} sm={4} data-aos="fade" data-aos-delay="300">
                            <div className={styles.howItWorkItem}>
                                <span className={styles.number}>3</span>
                                <div className="how-it-work-body">
                                    <h3 className={styles.smallTitle}>Oczekuj kuriera</h3>
                                <p className="mb-5">Ciesz się bezpiecznym dostarczeniem Twoich przesyłek</p>
                                <ul className={`${styles.ulCheck} list-unstyled white`}>
                                    <li className="text-white">Error minus sint nobis dolor</li>
                                    <li className="text-white">Voluptatum porro expedita labore esse</li>
                                    <li className="text-white">Voluptas unde sit pariatur earum</li>
                                </ul>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} spacing={4} data-aos="fade" data-aos-delay="100">

                            <Grid item className={`${styles.benefit}`} xs={12} sm={3} data-aos="fadeIn" data-aos-delay="100"> 
                                <img src={truck} alt="" />
                                <p>Krótki czas dostarczenia</p>
                            </Grid>
                            <Grid item className={`${styles.benefit}`} xs={12} sm={3} data-aos="fadeIn" data-aos-delay="200">
                                <img src={parcel} alt=""/>
                                <p>Gwarancja bezpieczeństwa Twojej przesyłki</p>
                            </Grid>
                            <Grid item className={`${styles.benefit}`} xs={12} sm={3} data-aos="fadeIn" data-aos-delay="300">
                                <img src={phone} alt=""/>
                                <p>Jesteśmy tu dla Ciebie</p>
                            </Grid>
                            <Grid item className={`${styles.benefit}`} xs={12} sm={3} data-aos="fadeIn" data-aos-delay="300">
                                <img src={money} alt=""/>
                                <p>Gwarancja niskich cen</p>
                            </Grid>   
                       
                    </Grid>

                </Grid>
            </Container>
        </div>
  
    )
}

export default BenefitsIconsSection;