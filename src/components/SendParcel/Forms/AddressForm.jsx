import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import { useFormikContext } from 'formik';
import './AddressForm.css';


const countries = [
  {

    value: 'Polska',
    label: 'Polska'
  },
  {

    value: 'Szwecja',
    label: 'Szwecja'
  },
];

export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      firstName2,
      lastName,
      lastName2,
      address1,
      address2,
      city,
      city2,  
      zipcode,
      zipcode2,
      country,
      country2,
    }
  } = props;

  const { values: formValues } = useFormikContext();
console.log(formValues)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dane adresowe nadania paczki
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
      </Grid>
        <Typography className="second-steptitle" variant="h6" gutterBottom>
          Dane adresowe odbioru paczki
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField name={firstName2.name} label={firstName2.label} fullWidth />
            </Grid>
             <Grid item xs={12} sm={6}>
              <InputField name={lastName2.name} label={lastName2.label} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputField name={address2.name} label={address2.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField name={city2.name} label={city2.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField name={zipcode2.name} label={zipcode2.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                name={country2.name}
                label={country2.label}
                data={countries}
                fullWidth
              />
            </Grid> 
        </Grid> 
    </React.Fragment>
  );
}
