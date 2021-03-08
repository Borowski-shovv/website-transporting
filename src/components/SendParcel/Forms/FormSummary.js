import React from 'react';
import { Card, CardContent, Grid, Box, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';

function FormSummary() {
    const { values: formValues} =  useFormikContext()

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
                                                Paczka:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.name}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Waga:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.weight}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Wysokość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.height}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Szerokość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.width}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Długość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.length}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
                                            <Grid item>
                                            <Typography variant="h6" fontSize={'18px'} gutterBottom>
                                                Ilość:
                                            </Typography>
                                            </Grid>
                                            <Grid item>{p.amount}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Grid container direction="column">
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

export default FormSummary

