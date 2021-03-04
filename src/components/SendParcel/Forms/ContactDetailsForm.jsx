import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import DatePicker from '../FormFields/DatePicker';
import './ContactDetailsForm.css';
import { useFormikContext } from 'formik';
import { useDropzone } from "react-dropzone";

const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
const days = ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob']

const locale = {
  localize: {
    month: n => months[n],
    day: n => days[n]
  },
  formatLong: {}
}
  
  return (
    <React.Fragment>
      <Typography className="second-steptitle" variant="h6" gutterBottom>
        Termin odbioru i dostawy
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} md={6}>
          <DatePicker locale={locale} minDate={new Date()} name="preferowana data nadania" label="Preferowana data nadania paczki"/>
        </Grid>
         <Grid item xs={12} md={6}>
            <DatePicker locale={locale} minDate={new Date()} name="preferowana data odbioru" label="Preferowana data odbioru paczki"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField variant="outlined" multiline rows={4} name='uwagi klienta' label={'Dodatkowe informacje dotyczące przesyłki'} fullWidth />
        </Grid>
      </Grid>
      <Grid>
        <Typography className="second-steptitle" variant="h6" gutterBottom>
        Wstaw zdjęcia Twojej przysłki
        </Typography>
      </Grid>
    
    </React.Fragment>
  );
}

