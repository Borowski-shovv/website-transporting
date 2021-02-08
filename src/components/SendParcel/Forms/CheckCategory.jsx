import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './checkCategory.css';
import { Formik, Field, Form } from 'formik';
export default function CheckCategory({formCategoryImages}) {
    const { category1,category4, category2, category3 ,category5 } = formCategoryImages;

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Wybierz kategorie przesyłki
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={2}>
                 
                    <Field className="paczka" type="radio" name='thing1' id="paczka" />
                    <p>Paczka</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="paleta" type="radio" name='thing1' id="" label="Paczka"/>
                    <p>Paleta</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="auto" type="radio" name='thing1' id=""/>
                    <p>Paleta</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="przeprowadzka" type="radio" name='thing1' id=""/>
                    <p>Przeprowadzki</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="ponadgabarytowy" type="radio" name='thing1' id=""/>
                    <p>Transport ponadgabarytowy</p>
                </Grid>
            </Grid>
        </>
    )
}

// radioGroup: Yup.string().required("A radio option is required")