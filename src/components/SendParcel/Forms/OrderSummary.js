import React from 'react';
import { Card, CardContent, Grid, Box, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    textCenter: {
       textAlign: 'center',
    },
    
  }))

function OrderSummary() {
    const { values: formValues} =  useFormikContext();
    const classes = useStyles();
    console.log('wartosci do podsumowania', formValues)

    return (
        <>
            <Grid container>       
                <Grid xs={12} item> 
                {
                    formValues.parcel.length > 0 &&  formValues.parcelCategory === 'paczka' ? 
                    <>

                    {formValues.parcel.map((p,idx) => {
                        return (
                            <div className="addNewParcel-wrapper" key={idx}>
                                <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={1}>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Typ paczki:
                                            </Typography>
                                            </Grid>
                                            <Grid  item>{p.name}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Waga:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.weight + ' kg'}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                                <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                    Wysokość:
                                                </Typography>
                                            </Grid>
                                            <Grid item>{p.height + ' cm'}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Szerokość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.width + ' cm'}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Długość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.length + ' cm'}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Ilość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.amount + ' szt'}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid  className="long-column" container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Sposób pakowania:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.kindOfpackage}</Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            )
                        })
                    }
                    </>
                    : null
                }
                </Grid>
            </Grid>
        </>
    )
}

export default OrderSummary

