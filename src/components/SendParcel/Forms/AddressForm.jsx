import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Paper } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import { useFormikContext } from 'formik';
import './AddressForm.css';
import {useStyle} from '../../Layout/styles';
import Axios from 'axios';

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

////
// contextFormiAPi value dostane emaila
// wysylanie geta z emailem axiosem

export default function AddressForm(props) { 
<<<<<<< Updated upstream

=======
    const [error, setError] = useState('');
    const { setFormikEmailInput } = useContext(AuthCustomer);
>>>>>>> Stashed changes
    const {
      formField: {
        firstName,
        firstName2,
        address1,
        address2,
        city,
        city2,  
        zipcode,
        zipcode2,
        country,
        country2,
        contactPerson,
        contactPerson2,
        contactNumber,
        contactNumber2,
      }
    } = props;
<<<<<<< Updated upstream
=======


    useEffect(() => {
      const checkUserExist = async (userEmail) => {
        //sprawdzenie uzytkownika, ktory wypelnia formularz;
        await Axios.get('https://najtanszapaczkaszwecja.pl/api/user', 
        {
        params: { email: userEmail },
        auth: { username: 'shovv', password: '$HOVV2020'}
        })
        .then(res => {
          if (res && res.data.email) {
            setFormikEmailInput(res.data.email)
          };
          
          if(res && res.data.error) {
            setError(res.data.error)
          };
        }
        
        )
        
        //ZAPISANIE STATUSU DO CONTEXTU I NA PODSTAWIE TEGO WYSWIETLENIE LUB NIE PODSUMOWANIA
        // console.log('funkcja wysylajaca uzytkownika', userEmail)
        // informacja dotyczaca emaila 
      };
      
      checkUserExist(userEmail)
    }, [])
>>>>>>> Stashed changes
    
    
    const checkUserExist = async (userEmail) => {
      //sprawdzenie uzytkownika, ktory wypelnia formularz;
      await Axios.get('https://najtanszapaczkaszwecja.pl/api/user', 
      {
      params: { email: userEmail },
      auth: { username: 'shovv', password: '$HOVV2020'}
      })
      .then(res => console.log(res))
      // console.log('funkcja wysylajaca uzytkownika', userEmail)
    };
    
    //zapisanie statusu uzytkownika do globalnego stanu
    // na podstawie statusu uzytkownika wygenerowanie widoku przed podsumowaniem wysylki
  
    const { values: formValues } = useFormikContext();
    const userEmail = formValues.userEmail
    checkUserExist(userEmail)

    
  const classes = useStyle();
  // console.log('email uzytkownika', formValues.userEmail)



  return (
    <React.Fragment>
      <Box mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} >
            <Paper>
              <Grid container spacing={3} className={classes.addressPaper}>
                <Typography variant="h6" gutterBottom>
                  Dane adresowe nadawcy
                </Typography>
                <Grid item xs={10}>
                  <InputField name={firstName.name} label={firstName.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={address1.name} label={address1.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={city.name} label={city.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={zipcode.name} label={zipcode.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={contactPerson.name} label={contactPerson.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField type="number" name={contactNumber.name} label={contactNumber.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <SelectField
                    name={country.name}
                    label={country.label}
                    data={countries}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Grid container spacing={3} className={classes.addressPaper}>
                <Typography variant="h6" gutterBottom>
                  Dane adresowe odbiorcy
                </Typography>
                <Grid item xs={10}>
                  <InputField name={firstName2.name} label={firstName2.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={address2.name} label={address2.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={city2.name} label={city2.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={zipcode2.name} label={zipcode2.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={contactPerson2.name} label={contactPerson2.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField type="number" name={contactNumber2.name} label={contactNumber2.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <SelectField
                    name={country2.name}
                    label={country2.label}
                    data={countries}
                    fullWidth
                  />
                </Grid> 
              </Grid> 
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
