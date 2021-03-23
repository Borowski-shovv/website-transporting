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
                            formValues.packages.map((p,idx) => {
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
                                                    <Grid item>
                                                        {p.packageType == 1 ? <div>karton lub koperta</div> : null}
                                                        {p.packageType == 2 ? <div>folia stretch</div> : null}
                                                        {p.packageType == 3 ? <div>folia bąbelkowa</div> : null}
                                                        {p.packageType == 4 ? <div>przesyłka niestandardowa</div> : null}
                                                    
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container>
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Waga:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.packageWeight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container >
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Wysokość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{p.packageHeight + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container>
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Szerokość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.packageWidth + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid container >
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Długość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.packageLength + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Grid className='summaryValue' container>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" gutterBottom>
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>{p.packageAmount + ' szt'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }

                        {
                            formValues.pallets.map((p, idx) => {
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
                                                    <Grid item>
                                                        {p.palletType == 1 ? <div>europaleta</div> : null}
                                                        {p.palletType == 2 ? <div>inna</div> : null}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Waga:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.palletWeight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Wysokość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{p.palletHeight + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Szerokość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.palletWidth + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Długość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.palletLength + ' cm'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Ilość:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{p.palletAmount + ' szt'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }

                        {
                            formValues.vehicles.map((v, idx) => {
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
                                                    <Grid item>
                                                        {v.vehicleType == 1 ? <div>osobowe</div> : null}
                                                        {v.vehicleType == 2 ? <div>dostawcze</div> : null}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Marka auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleBrand}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                    <Typography variant="h6" gutterBottom>
                                                        Model auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleModel}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Przybliżona masa:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleWeight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Długość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleLength + ' m'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }

                        {
                            formValues.furnitures.map((f, idx) => {
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
                                                    <Grid item>{f.furnitureName}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{f.furnitureAmount}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })
                        }
                        {
                            formValues.cargo.map((c, idx) => {
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
                                                    <Grid item>{c.cargoName}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Grid className="long-column" container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h6" gutterBottom>
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{c.cargoAmount}</Grid>
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

