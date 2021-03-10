import React from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { InputField, SelectField } from '../FormFields';
import DatePicker from '../FormFields/DatePicker';
import './ContactDetailsForm.css';
import { MultipleFileUploadField } from '../FormFields/UploadField/MultipleFileUploadField';

const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
const days = ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob']

const servicesType = [
  {
    value: 'tylko transport',
    label: 'tylko transport',
  },
  {
    value: 'transport i pomoc kierowcy w zniesieniu i wniesieniu',
    label: 'transport i pomoc kierowcy w zniesieniu i wniesieniu',
  },
  {
    value: 'transport i pomoc kilku osób w zniesieniu i wniesieniu',
    label: 'transport i pomoc kilku osób w zniesieniu i wniesieniu',
  },
  {
    value: 'kompleksowa obsługa (bez mojego udziału w znoszeniu i wnoszeniu)',
    label: 'kompleksowa obsługa (bez mojego udziału w znoszeniu i wnoszeniu)'
  },
]

const locale = {
  localize: {
    month: n => months[n],
    day: n => days[n]
  },
  formatLong: {}
}

const useStyles = makeStyles(theme => ({
  CustomPaper: {
      marginBottom: '20px',
      padding: '30px',
      marginTop: '20px'
  },
  bgcWhite: {
    backgroundColor: 'white'
  },
  mrgTop: {
    marginTop: 20,
  }
 
}))

export default function ContactDetailsForm(props) {
  const classes = useStyles();
  // const { values: formValues, values, setFieldValue } = useFormikContext();

  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.CustomPaper}>
        <Typography variant="h6" gutterBottom>
          Termin odbioru i dostawy
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <DatePicker locale={locale} minDate={new Date()} name="preferowana data nadania" label="Preferowana data nadania paczki"/>
          </Grid>
          <Grid item xs={12} md={6}>
              <DatePicker locale={locale} minDate={new Date()} name="preferowana data odbioru" label="Preferowana data odbioru paczki"/>
          </Grid>
         
        </Grid>
      </Paper>
      <Paper className={classes.CustomPaper}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField className={classes.bgcWhite} variant="outlined" multiline rows={4} name='clientComment' label={'Dodatkowe informacje dotyczące przesyłki'} fullWidth />
              </Grid>
              <Grid item xs={12}> 
                <SelectField
                  
                  // className={classes.bgcWhite}
                  label={'Typ usługi'}
                  name='servicesType'
                  data={servicesType}
                  fullWidth
                />
              </Grid>
            </Grid>
        
        
        </Grid>

        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Wstaw zdjęcia Twojej przysłki
            </Typography>
           
            <MultipleFileUploadField name="files" />
        </Grid>
      
      </Grid>
      </Paper>
 
      
    
    </React.Fragment>
  );
}

