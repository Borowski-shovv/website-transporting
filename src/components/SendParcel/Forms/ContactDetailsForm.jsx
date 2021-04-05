import React from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { InputField, SelectField, PackageType } from '../FormFields';
import DatePicker from '../FormFields/DatePicker';
import './ContactDetailsForm.css';
import { MultipleFileUploadField } from '../FormFields/UploadField/MultipleFileUploadField';
import { useFormikContext } from 'formik';

const servicesType = [
  {
    value: "1",
    label: 'tylko transport',
  },
  {
    value: "2",
    label: 'transport i pomoc kierowcy w zniesieniu i wniesieniu',
  },
  {
    value: "3",
    label: 'transport i pomoc kilku osób w zniesieniu i wniesieniu',
  },
  {
    value: "4",
    label: 'kompleksowa obsługa (bez mojego udziału w znoszeniu i wnoszeniu)'
  },
]

const useStyles = makeStyles(theme => ({
  CustomPaper: {
      marginBottom: '20px',
      padding: '30px',
      marginTop: '20px'
  },
  mrgTop: {
    marginTop: 20,
  }, 
}))


export default function ContactDetailsForm(props) {
  const classes = useStyles();
  const { errors, touched } = useFormikContext();
  console.log(errors)
  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.CustomPaper}>
        <Typography variant="h6" gutterBottom>
          Termin odbioru i dostawy
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <DatePicker name="pickupDate" minDate={new Date()} label="Preferowana data nadania*"/>
            {errors.pickupDate && touched.pickupDate ? (<Typography color="error">{errors.pickupDate}</Typography>) : null}
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker name="shipmentDate" minDate={new Date()} label="Preferowana data odebrania*"/>
            {errors.shipmentDate && touched.shipmentDate ? (<Typography color="error">{errors.shipmentDate}</Typography>) : null}
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} className={classes.CustomPaper}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField variant="outlined" multiline rows={4} name='comment' label={'Dodatkowe informacje dotyczące przesyłki'} fullWidth />
              </Grid>
              <Grid item xs={12}> 
                <SelectField
                  label='Typ usługi*'
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

