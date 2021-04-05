import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import './OrderSummary.css';
import { makeStyles } from '@material-ui/core';
import boxImg from '../../../assets/images/formImages/box.svg';
import palletImg from '../../../assets/images/formImages/wholesale.svg';
import truckImg from '../../../assets/images/formImages/truck.svg';
import couchImg from '../../../assets/images/formImages/couch.svg';
import trailerImg from '../../../assets/images/formImages/trailer.svg';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 13,
    },
    row: {
        padding: 8,
        [theme.breakpoints.down('sm')] : {
            borderBottom: '1px solid gray',
        }
    },
    cell: {
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'row'
        }
    },
    summaryTitle: {
        fontWeight: 400,
    },
    imgWidth: {
        width: 30,
    },
}))


function OrderSummary() {
    const { values: formValues} =  useFormikContext();
    const classes = useStyles();
    return (
        <>
            <Grid container>       
                <Grid container item> 
                {
                    <>
                                {
                                    formValues.packages.map((p,idx) => {
                                        return (             
                                            <Grid key={idx} style={{backgroundColor: '#f7f7f7', padding: '10px', marginTop: '10px'}} item container>
                                                    {/* <Typography variant="h6" className={classes.summaryTitle}>Paczka</Typography> */}
                                                    <Grid item container xs={12}>
                                                        <img className={classes.imgWidth} src={boxImg} alt='icon'/>
                                                    </Grid>
                                                    <Grid className={classes.row} item container xs={12} sm={2}>
                                                        <Grid item container justify="space-between" >
                                                            <Grid item >
                                                                <Typography className={classes.title} variant="h6">
                                                                    typ pakowania:
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                {p.packageType == 1 ? <Typography variant="body2">karton lub koperta</Typography> : null}
                                                                {p.packageType == 2 ? <Typography variant="body2">folia stretch</Typography> : null}
                                                                {p.packageType == 3 ? <Typography variant="body2">folia bąbelkowa</Typography> : null}
                                                                {p.packageType == 4 ? <Typography variant="body2">przesyłka niestandardowa</Typography> : null}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className={classes.row} item container xs={12} sm={2}>
                                                        <Grid className={classes.cell} container >
                                                            <Grid item>
                                                                <Typography className={classes.title} variant="h6" gutterBottom>
                                                                    Waga:
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>{p.packageWeight + ' kg'}</Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className={classes.row} item container xs={12} sm={2}>
                                                        <Grid className={classes.cell} container>
                                                            <Grid item>
                                                                <Typography className={classes.title} variant="h6" gutterBottom>
                                                                    Wysokość:
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>{p.packageHeight + ' cm'}</Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className={classes.row} item container xs={12} sm={2}>
                                                        <Grid container className={classes.cell}>
                                                            <Grid item>
                                                            <Typography className={classes.title} variant="h6" gutterBottom>
                                                                Szerokość:
                                                            </Typography>
                                                            </Grid>
                                                            <Grid item>{p.packageWidth + ' cm'}</Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className={classes.row} item container xs={12} sm={2}>
                                                        <Grid container className={classes.cell}>
                                                            <Grid item>
                                                            <Typography className={classes.title} variant="h6" gutterBottom>
                                                                Długość:
                                                            </Typography>
                                                            </Grid>
                                                            <Grid item>{p.packageLength + ' cm'}</Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className={classes.row} item container xs={12} sm={1}>
                                                        <Grid container className={classes.cell}>
                                                            <Grid item >
                                                                <Typography className={classes.title} variant="h6" gutterBottom>
                                                                    Ilość:
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item >{p.packageAmount + ' szt'}</Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                        )
                                    })
                                }
                  

                            {
                                formValues.pallets.map((p, idx) => {
                                    return (
                                            <Grid key={idx} style={{backgroundColor: '#f7f7f7', padding: '10px', marginTop: '10px'}} container>
                                                <Grid item container xs={12}>
                                                    <img className={classes.imgWidth} src={palletImg} alt='icon'/>
                                                </Grid>
                                                <Grid className={classes.row} item container xs={12} sm={2}>
                                                    <Grid item container  justify="space-between">
                                                        <Grid item>
                                                            <Typography className={classes.title} gutterBottom variant="h6">
                                                                Rodzaj palety:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            {p.palletType == 1 ? <Typography variant="body2"  gutterBottom>europaleta</Typography> : null}
                                                            {p.palletType == 2 ? <Typography variant="body2"  gutterBottom>inna</Typography> : null}
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid className={classes.row} item container xs={12} sm={2}>
                                                    <Grid className={classes.cell} container>
                                                        <Grid item>
                                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                                            Waga:
                                                        </Typography>
                                                        </Grid>
                                                        <Grid item>{p.palletWeight + ' kg'}</Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid className={classes.row} item container xs={12} sm={2}>
                                                    <Grid className={classes.cell} container>
                                                        <Grid item>
                                                            <Typography className={classes.title} variant="h6" gutterBottom>
                                                                Wysokość:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>{p.palletHeight + ' cm'}</Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid className={classes.row} item container xs={12} sm={2}>
                                                    <Grid container className={classes.cell}>
                                                        <Grid item>
                                                            <Typography className={classes.title} variant="h6" gutterBottom>
                                                                Szerokość:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>{p.palletWidth + ' cm'}</Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid className={classes.row} item container xs={12} sm={2}>
                                                    <Grid container className={classes.cell}>
                                                        <Grid item>
                                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                                            Długość:
                                                        </Typography>
                                                        </Grid>
                                                        <Grid item>{p.palletLength + ' cm'}</Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid className={classes.row} item container xs={12} sm={2}>
                                                    <Grid container className={classes.cell}>
                                                        <Grid item>
                                                            <Typography className={classes.title} variant="h6" gutterBottom>
                                                                Ilość:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>{p.palletAmount + ' szt'}</Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                    )
                                })
                            }

                        {
                            formValues.vehicles.map((v, idx) => {
                                return (
                                    <Grid key={idx} style={{backgroundColor: '#f7f7f7', padding: '10px',marginTop: '20px'}} container>
                                            <Grid item container xs={12}>
                                                <img className={classes.imgWidth} src={truckImg} alt='icon'/>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className="long-column" container justify="space-between">
                                                    <Grid item>
                                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                                            Rodzaj auta:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        {v.vehicleType == 1 ? <Typography variant="body2">osobowe</Typography> : null}
                                                        {v.vehicleType == 2 ? <Typography variant="body2">dostawcze</Typography> : null}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className={classes.cell} container>
                                                    <Grid item>
                                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                                        Marka auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleBrand}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid container className={classes.cell}>
                                                    <Grid item>
                                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                                        Model auta:
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleModel}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className={classes.cell} container >
                                                    <Grid item>
                                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                                            zbliżona masa:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleWeight + ' kg'}</Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid container className={classes.cell}>
                                                    <Grid item>
                                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                                            Długość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>{v.vehicleLength + ' m'}</Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                )
                            })
                        }

                        {
                            formValues.furnitures.map((f, idx) => {
                                return (
                                          <Grid key={idx}  style={{backgroundColor: '#f7f7f7', padding: '10px',marginTop: '20px'}} container >
                                            <Grid item container xs={12}>
                                                    <img className={classes.imgWidth} src={couchImg} alt='icon'/>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className={classes.cell} container >
                                                    <Grid item>
                                                        <Typography className={classes.title} gutterBottom variant="h6">
                                                            Rodzaj mebla:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item> <Typography variant="body2"  gutterBottom>{f.furnitureName}</Typography></Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className={classes.cell} container>
                                                    <Grid item>
                                                        <Typography className={classes.title} gutterBottom variant="h6">
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item><Typography variant="body2" gutterBottom>{f.furnitureAmount}</Typography></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                )
                            })
                        }
                        {
                            formValues.cargo.map((c, idx) => {
                                return (
                                        <Grid key={idx} style={{backgroundColor: '#f7f7f7', padding: '10px', marginTop: '20px'}} container>
                                            <Grid item container xs={12}>
                                                    <img className={classes.imgWidth} src={trailerImg} alt='icon'/>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className={classes.cell} container>
                                                    <Grid item>
                                                        <Typography className={classes.title} gutterBottom variant="h6">
                                                            Twoje zamówienie:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item><Typography variant="body2" gutterBottom>{c.cargoName}</Typography></Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid className={classes.row} item container xs={12} sm={2}>
                                                <Grid className={classes.cell} container>
                                                    <Grid item>
                                                    <Typography className={classes.title} gutterBottom variant="h6">
                                                            Ilość:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item><Typography variant="body2" gutterBottom>{c.cargoAmount}</Typography></Grid>
                                                </Grid>
                                            </Grid>
                
                                        </Grid>
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

