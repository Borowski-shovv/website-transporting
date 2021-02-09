import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../FormFields';
import './checkCategory.css';
import { Field } from 'formik';
import { useFormikContext } from 'formik';

export default function CheckCategory(props) {
    const { formField: { email }} = props;
    const { formParcelCategory: {category1, category2, category3, category4, category5 }} = props;
    const { values: formValues } = useFormikContext();
    console.log(formValues);
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Wybierz kategorie przesyłki
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={2}>
                    <InputField className="paczka" type="radio" name="parcelCategory" id="paczka" value="paczka"/>

                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="paleta" type="radio" name='parcelCategory' id="paleta" value="paleta"/>
                    <p>Paleta</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="auto" type="radio" name='parcelCategory' id="auto" value="auto"/>
                    <p>Paleta</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="przeprowadzka" type="radio" name='parcelCategory' id="przeprowadzka" value="przeprowadzka"/>
                    <p>Przeprowadzki</p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Field className="ponadgabarytowy" type="radio" name='parcelCategory' id="ponadgabarytowy" value="ponadgabarytowy"/>
                    <p>Transport ponadgabarytowy</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={email.name} label={email.label} fullWidth />
                </Grid>
            </Grid>
        </>
    )
}

// radioGroup: Yup.string().required("A radio option is required")