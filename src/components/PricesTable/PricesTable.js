import React from 'react';
import {Container, Grid } from '@material-ui/core';
import './PricesTable.css';

const PricesTable = () => {
    return (  
        <section className="prices">
        <Container>
            <Grid container spacing={3}>
                <Grid container item xs={12} sm={6}>
                    <table>
                        <thead>
                            <tr>
                                <th>Waga</th>
                                <th>Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>do 30kg</td>
                            <td>120 zł lub 300 SEK</td>
                        </tr>
                        <tr>
                            <td>powyżej 30kg</td>
                            <td>cena ustalana indywidualnie</td>
                        </tr>
                        
                        <tr>
                            <td className="promo">3 przesyłki 30kg</td>
                            <td className="promo">600 SEK</td>
                        </tr>
                        </tbody>
                    </table>
                </Grid>
                <Grid container item xs={12} sm={6} >
                    <h3>Cennik</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae doloribus ipsum quibusdam possimus ipsam accusamus, fugiat minus eligendi labore magni doloremque, repellat ab omnis quae provident quas. Repellendus, doloremque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae doloribus ipsum quibusdam possimus ipsam accusamus, fugiat minus eligendi labore magni doloremque, repellat ab omnis quae provident quas. Repellendus, doloremque?</p>
                </Grid>                        
            </Grid>
        </Container>
    </section>
    );
}
 
export default PricesTable;