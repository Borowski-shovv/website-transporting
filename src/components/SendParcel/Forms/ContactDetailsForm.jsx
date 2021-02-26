import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import DatePicker from '../FormFields/DatePicker';
import './ContactDetailsForm.css';



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

export default function ContactDetailsForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails
    }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dane kontaktowe
      </Typography>
      <Grid container spacing={3}>
  
        <Grid item xs={12} sm={6}>
          <InputField name="numer kontaktowy nadawcy" label="Numer kontaktowy nadawcy paczki*" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name="numer kontaktowy odbiorcy" label="Numer kontaktowy odbiorcy paczki*" fullWidth />
        </Grid>
      </Grid>
      <Typography className="second-steptitle" variant="h6" gutterBottom>
        Termin odbioru i dostawy
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} md={6}>
          <DatePicker  minDate={new Date()} name="data nadania" label="Preferowana data nadania paczki"/>
        </Grid>
         <Grid item xs={12} md={6}>
            <DatePicker  name="data odbioru" label="Preferowana data odbioru paczki"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField  multiline rows={4} name={'komentarz'} label={'Dodatkowe informacje'} fullWidth />
        </Grid>
      </Grid>
        <p>Podane terminy są opcjonalne i mogą ulec zmianie zmianie</p>
    </React.Fragment>
  );
}
