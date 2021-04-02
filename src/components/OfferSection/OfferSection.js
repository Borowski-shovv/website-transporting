import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import serviceBg from '../../assets/images/service-cargo-bg.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import './OfferSection.css';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#bf1e2e',
        color: 'white',
        height: 'fit-content',
        "&:hover": {
            backgroundColor: '#d32f2f',
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
        },
        margin: '0 auto 10px',
    },
}))

function OfferSection() {
    const classes = useStyles();
    return (
        <section className="section-wrapper">
        <Container>
            <Grid container >
                <Grid item xs={12} sm={6} container >
                        <h3 className='card-title'>
                            Oferta     
                        </h3>
                    <p>
                    Przy przewozie kilku ładunków przygotujemy dla Ciebie atrakcyjną ofertę cenową, skontaktuj się z nami e-mailowo lub telefonicznie aby poznać szczegóły. Serdecznie zapraszamy do współpracy!
                    </p>
                    <ul className='list'>
                        <li >Zapewniamy szybki i tani przewóz paczek na trasie Polska – Szwecja – Polska. </li>
                        <li >Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
                        <li >Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
                        <li >Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
                    </ul>
                </Grid>

                <Grid item container xs={12} sm={6}>
                    <img
                        src={serviceBg}                                
                        alt="transport"
                    />
                    <Button href="/oferta" className={classes.button} variant="contained">Oferta</Button>
                    
                </Grid>
            </Grid>
        </Container>
    </section>
    )
}

export default OfferSection
