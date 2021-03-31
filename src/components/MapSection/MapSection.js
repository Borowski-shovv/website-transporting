import React from 'react';
import {Container, Grid} from '@material-ui/core';
import serviceBg from '../../assets/images/service-cargo-bg.png';
import trasyImg from '../../assets/images/vectorrmap.svg';

function MapSection() {
    return (
        <section className="map-section">
                        <Container>
                            <Grid container spaxing={3}>
                                <Grid container item xs={12} md={6} className="mapa-content  order-2">
                                    <div className="section-title">
                                        <h2>
                                            TRASY     
                                        </h2>
                                    </div>
                                    <p>
                                Mapa przedstawia najczęściej pokonywane przez nas szlaki drogowe. w Szwecji jesteśmy w stanie dowieźć Twoją przesyłkę w każde miejsce
                                    </p>
                                    <ul>
                                        <li>Dzięki doświadczeniu, które zdobyliśmy podczas lat pracy, wybieramy najbardziej optymalne trasy, abyś jak najkrócej czekał na swoją przesyłkę</li>
                                        <li>Z każdym powierzonym nam mieniem obchodzimy się z należytą ostrożnością</li>
                                        <li>Na czas transportu zabezpieczamy każdy przedmiot matą transportową oraz pasami transportowymi.</li>
                                        <li>Dowieziemy ładunek w każde miejsce w Polsce oraz Szwecji </li>
                                    </ul>
                                </Grid>

                                <Grid container item xs={12} md={6} className="mapa" >
                                    <img
                                        src={trasyImg} 
                                    
                                        alt=""
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                    </section> 
    )
}

export default MapSection
