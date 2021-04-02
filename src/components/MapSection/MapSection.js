import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import serviceBg from '../../assets/images/service-cargo-bg.png';
import trasyImg from '../../assets/images/vectorrmap.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    text: {
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
    }
})

function MapSection() {
    const classes = useStyles();

    return (
        <section className="map-section">
                        <Container>
                            <Grid container spacing={3}>
                                <Grid container item justify="center" xs={12} md={6} className="">
                                        <div className="section-title">
                                            <h3 className="card-title">
                                                TRASY     
                                            </h3>
                                        </div>
                                        <Typography className={classes.text} variant="body2">
                                            Mapa przedstawia najczęściej pokonywane przez nas szlaki drogowe. w Szwecji jesteśmy w stanie dowieźć Twoją przesyłkę w każde miejsce
                                        </Typography>
                                        <ul className='list'>
                                            <li className={classes.text}>Dzięki doświadczeniu, które zdobyliśmy podczas lat pracy, wybieramy najbardziej optymalne trasy, abyś jak najkrócej czekał na swoją przesyłkę</li>
                                            <li className={classes.text}>Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
                                            <li className={classes.text}>Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
                                            <li className={classes.text}>Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
                                        </ul>
                                   
                                </Grid>

                                <Grid container justify="center" item xs={12} md={6} className="mapa" >
                                    <img src={trasyImg} alt="mapa" />
                                </Grid>
                            </Grid>
                        </Container>
                    </section> 
    )
}

export default MapSection
