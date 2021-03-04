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
        
      </Grid>
    </React.Fragment>
  );
}
