import React from 'react';
import './CardSection.css';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import card2 from '../../assets/images/sweplmap.jpg'
import card1 from '../../assets/images/card1.jpg'
import blog2 from '../../assets/images/price-list.jpg'
import blog3 from '../../assets/images/flota.jpg'
import classNames from 'classnames';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from "@material-ui/core/CardMedia";
import { red, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    section: {
        margin: '0px 0 50px',
         
    },
    root: {
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    },
    title: {
        fontSize: 14,
        fontFamily: 'Roboto, sans-serif',
        marginTop: 15,
        color: '#687284',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#bf1e2e',
        color: 'white',
        "&:hover": {
            backgroundColor: '#d32f2f',
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
        },
        margin: '0 auto 10px',
    },
    titleLink: {
        fontSize: 24,
        fontWeight: 500,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#bf1e2e'
    },

})

const CardSection = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <section className={classes.section}>
            <Container>
               <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} sm={5}>
                        <h1 className='card-title' variant='h3'>Usługi transportowe Szwecja-Polska-Szwecja</h1>
                    </Grid>

                    <Grid item container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ height: "100%" }}>
                                <CardMedia
                                style={{ height: "250px", width: "content-fit" }}
                                image={card1}
                                />
                                <CardContent className={classes.root}>
                                    <Link className={classes.titleLink} to="/oferta">Wyceń przesyłkę</Link>
                                    <Typography
                                        variant="body2"
                                        className={classes.title}
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        Złóż zamówienie w kilku krótkich krokach, już w 15 minut skontaktujemy się z Tobą podając wycenę oraz wszystkie szczegóły transportu.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href="/wycena" className={classes.button} color="primary" variant="contained">Wyceń przesyłkę</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ height: "100%" }}>
                                <CardMedia
                                    style={{ height: "250px", width: "content-fit" }}
                                    image={card2}
                                />
                            <CardContent className={classes.root}>
                                <Link className={classes.titleLink} to="/oferta">Trasy</Link>
                                <Typography
                                    variant="body2"
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                Pokonujemy stałą trasę Polska-Szwecja-Polska. Jednak odbierzemy i dowieziemy Twoją paczkę w każde miejsce w Polsce i Szwecji.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="/oferta" className={classes.button} color="primary" variant="contained">Sprawdź</Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ height: "100%" }}>
                                <CardMedia
                                style={{ height: "250px", width: "content-fit" }}
                                image={blog3}
                                />
                            <CardContent className={classes.root}>
                                <Link  className={classes.titleLink} to="/oferta">Oferta</Link>
                                <Typography
                                variant="body2"
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                >
                                Gwarantujemy najlepsze ceny na rynku, w przypadku przesyłek niestandardowych satysfakcjonującą cenę ustalimy indywidualnie.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="/oferta" className={classes.button} onClick={() => history.push('/oferta')} variant="contained">Oferta</Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid> 
            </Container>
            {/* <div className="cards-wrapper">
                <div className="row">
                    <h1 className="card-title">Usługi transportowe Szwecja-Polska-Szwecja</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                        <div className="single-blog wow fadeInUp" >
                            <div className="blog-image">
                                <img src={card1} alt="" />
                            </div>
                            <div className="blog-details text-center">
                                <div className="blog-meta"><Link to="#" ><i className="fa fa-dropbox"></i></Link></div>
                                <h3><Link to="/oferta">Złóż zamówienie</Link></h3>
                                <p>Złóż zamówienie w kilku krótkich krokach, już w 15 minut skontaktujemy się z Tobą podając wycenę oraz wszystkie szczegóły transportu Twoich rzeczy</p>
                                <Link to="/oferta" className="read-more">Formularz</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                        <div className="single-blog wow fadeInUp" >
                            <div className="blog-image">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="blog-details text-center">
                                <div className="blog-meta"><Link to="#" ><i className="fa fa-map"></i></Link></div>
                                <h3><Link to="/oferta">Trasy</Link></h3>
                                <p>Pokonujemy stałą trasę Polska-Szwecja-Polska. Istnieje możliwość porozumienia się i przewiezienia rzeczy w inne miejsce niż na zaznaczonych trasach.</p>
                                <Link to="/oferta" className="read-more">Sprawdź</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200"> 
                        <div className="single-blog wow fadeInUp" >
                            <div className="blog-image">
                                <img src={blog2} alt="" />
                            </div>
                            <div className="blog-details text-center">
                                <div className="blog-meta"><Link  to="#"><i className="fa fa-money"></i></Link ></div>
                                <h3><Link to="/oferta">Cennik</Link></h3>
                                <p>Gwarantujemy najlepsze ceny na rynku, w przypadku przesyłek niestandardowych satysfakcjonującą cenę ustalimy indywidualnie</p>
                                <Link to="/oferta" className="read-more">Sprawdź</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-12 col-xs-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                        <div className="single-blog wow fadeInUp" data-wow-delay="0.4s">
                            <div className="blog-image">
                                <img src={blog3} alt="" />
                            </div>
                            <div className="blog-details text-center">
                                <div className="blog-meta"><Link  to="#"><i className="fa fa-truck"></i></Link ></div>
                                <h3><Link to="/galeria">Flota</Link></h3>
                                <p>Samochody ciężarowe oraz dostawcze wchodzące w skład naszej floty zapewniają dokładne dopasowanie ładunków do potrzeb przewozów.</p>
                                <Link to="/galeria" className="read-more">Sprawdź</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default CardSection;