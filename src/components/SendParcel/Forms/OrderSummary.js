import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import './OrderSummary.css'

function OrderSummary() {
    const { values: formValues} =  useFormikContext();

    return (
        <>
            <Grid container>       
                <Grid xs={12} item> 
                {
                    <>
                        {
                            formValues.parcel.map((p,idx) => {
                                return (
                                    <div className="summaryOrderRow" key={idx}>
                                        <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={1}>
                                            <Grid item xs={12} sm={2}>
                                                <Grid className="long-column" container>
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Sposób pakowania:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{p.kindOfpackage}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container>
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Waga:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.weight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container >
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Wysokość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{p.height + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container>
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Szerokość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.width + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container >
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Długość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.length + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid className='summaryValue' container>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" gutterBottom>
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>{p.amount + ' szt'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }

                        {
                            formValues.pallet.map((p, idx) => {
                                return (
                                    <div className="summaryOrderRow" key={idx}>
                                        <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={1}>
                                        <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Rodzaj palety:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid  item>{p.type}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Waga:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.weight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Wysokość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{p.height + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Szerokość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.width + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Długość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.length + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Ilość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.amount + ' szt'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }

                        {
                            formValues.car.map((c, idx) => {
                                return (
                                    <div className="summaryOrderRow" key={idx}>
                                          <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={1}>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Rodzaj auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid  item>{c.type}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Marka auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid  item>{c.brand}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Model auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{c.model}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Przybliżona masa:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{c.weight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Długość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{c.length + ' m'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }

                        {
                            formValues.removal.map((f, idx) => {
                                return (
                                    <div className="summaryOrderRow" key={idx}>
                                          <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={1}>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Rodzaj mebla:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{f.name}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{f.amount}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }
                        {
                            formValues.oversized.map((i, idx) => {
                                return (
                                    <div className="summaryOrderRow" key={idx}>
                                          <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={1}>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Twoja przesyłka:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{i.name}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{i.amount}</Grid>
                                                </Grid>
                                            </Grid>
                
                                        </Grid>
                                    </div>
                                )
                            })
                        }
                    </>
                }

     
                </Grid>
            </Grid>
        </>
    )
}

export default OrderSummary

