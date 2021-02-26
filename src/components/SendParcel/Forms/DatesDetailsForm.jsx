import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../FormFields';
import DatePicker from '../FormFields/DatePicker';

export default function DatesForm(props) {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
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
