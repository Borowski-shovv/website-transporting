import React from 'react';
import './CardSection.css';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // padding: 0,
      },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins, sans-serif',
    }
})


const CardSection = () => {
    const classes = useStyles();

    return (
        <section className="blog-area">
            <Container>
               <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} sm={5}>
                        <h1 className='card-title' variant='h3'>Usługi transportowe Szwecja-Polska-Szwecja</h1>
                    </Grid>

                    <Grid item container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card style={{ height: "100%" }}>
                                <CardMedia
                                style={{ height: "250px", width: "content-fit" }}
                                image={card1}
                                />
                            <CardContent className={classes.root}>
                                <Link to="/oferta">Złóż zamówienie</Link>
                                <Typography
                                variant="body2"
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                >
                                Złóż zamówienie w kilku krótkich krokach, już w 15 minut skontaktujemy się z Tobą podając wycenę oraz wszystkie szczegóły transportu Twoich rzeczy
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" variant="contained" size="small">Złóż zamówienie</Button>
                               
                            </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card style={{ height: "100%" }}>
                                <CardMedia
                                    style={{ height: "250px", width: "content-fit" }}
                                    image={card2}
                                />
                            <CardContent className={classes.root}>
                                <Link to="/oferta">Trasy</Link>
                                <Typography
                                    variant="body2"
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                Pokonujemy stałą trasę Polska-Szwecja-Polska. Istnieje możliwość porozumienia się i przewiezienia rzeczy w inne miejsce niż na zaznaczonych trasach.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" variant="contained" size="small">Sprawdź</Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card style={{ height: "100%" }}>
                                <CardMedia
                                style={{ height: "250px", width: "content-fit" }}
                                image={blog3}
                                />
                            <CardContent className={classes.root}>
                                <Link to="/oferta">Oferta</Link>
                                <Typography
                                variant="body2"
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                >
                                Gwarantujemy najlepsze ceny na rynku, w przypadku przesyłek niestandardowych satysfakcjonującą cenę ustalimy indywidualnie
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" variant="contained" size="small">Oferta</Button>
                               
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