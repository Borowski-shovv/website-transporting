import React from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { InputField, InputRadio, CheckboxField } from '../FormFields';
import { useFormikContext } from 'formik';
import './CheckCategory.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    clientChoice: {
       textAlign: 'center',
       marginTop: '50px',
    },
    categoryName: {
        textAlign: 'center',
        marginTop: 0,
        textTransform: 'uppercase',
        color: '#323232',
    },
    titleCenter: {
        textAlign: 'center',
    },
    red: {
        color: 'red',
    }
  })

export default function CheckCategory(props) {
    const classes = useStyles()
    const { formField: { email }} = props;
    // const { formParcelCategory: {category1, category2, category3, category4, category5 }} = props;
     const { values: formValues } = useFormikContext();

     console.log(formValues)
    return (
        <div className="Step1-wrapper">
            <Typography variant="h6" gutterBottom className={classes.titleCenter}>
                Wybierz kategorie przesyłki
            </Typography>
            <Grid container justify="center" spacing={2} alignItems="center">
                <Grid item xs={12} sm={2}>
                    <p className={classes.categoryName}>Paczka</p>
                    <InputRadio categoryname="paczka" className="paczka" type="radio" name="parcelCategory" id="paczka" value="paczka"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p className={classes.categoryName}>Paleta</p>
                    <InputRadio categoryname="paleta" className="paleta" type="radio" name="parcelCategory" id="paleta" value="paleta"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p className={classes.categoryName}>Auto</p>
                    <InputRadio categoryname="auto" className="auto" type="radio" name="parcelCategory" id="auto" value="auto"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p className={classes.categoryName}>Przeprowadzka</p>
                    <InputRadio categoryname="przeprowadzka" className="przeprowadzka" type="radio" name='parcelCategory' id="przeprowadzka" value="przeprowadzka"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p className={classes.categoryName}>Transport ponadgabarytowy</p>
                    <InputRadio categoryname="ponadgabarytowy" className="ponadgabarytowy" type="radio" name='parcelCategory' id="ponadgabarytowy" value="ponadgabarytowy"/>
                </Grid>                
                <Grid className="email-grid-wrapper" container direction="row" item xs={12} sm={6}> 
                    <InputField name={email.name} label={email.label} fullWidth />
                </Grid>
                <Grid className="checkbox-grid-wrapper" container direction="row" item xs={12} sm={12}> 
                    <CheckboxField className="checkpackage-checkbox" name='pomoc przy załadunku i rozładunku' label="Pomoc przy załadunku i rozładunku"/>
                </Grid>
            </Grid>
            
            {formValues.parcelCategory ?  <h3 className={classes.clientChoice}>Kategoria Twojej przesyłki to: <span className={classes.red}>{formValues.parcelCategory}</span></h3> : null}
        </div>
    )
}
