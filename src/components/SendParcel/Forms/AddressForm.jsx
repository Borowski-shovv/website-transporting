import React, { useEffect, useState, useContext } from 'react';
import { Grid, Typography, Box, Paper } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import { useFormikContext } from 'formik';
import './AddressForm.css';
import { useStyle } from '../../Layout/styles';
import Axios from 'axios';
import userContext from '../../../context/userContext';

const countries = [
  {
    value: 'Polska',
    label: 'Polska',
  },
  {
    value: 'Szwecja',
    label: 'Szwecja',
  },
];

export default function AddressForm(props) {
  const { values: formValues } = useFormikContext();
  const userEmail = formValues.email;
  const { setEmailFilledInfo, userData } = useContext(userContext);
  const classes = useStyle();
  const {
    formField: {
      senderName,
      senderAddress,
      senderZip,
      senderCity,
      senderCountry,
      senderPhone,
      senderContact,
      recipientName,
      recipientAddress,
      recipientZip,
      recipientCity,
      recipientCountry,
      recipientContact,
      recipientPhone
    },
  } = props;

  // console.log('email zalogowanego uzytkownika', userData.user);
  useEffect(() => {
    const checkUserExist = async (email, userData) => {
      console.log(email)
      await Axios.get('https://najtanszapaczkaszwecja.pl/api/user', {
        params: { email },
        auth: { username: 'shovv', password: '$HOVV2020' },
      }).then((res) => {
        console.log(res)
        if (res && res.data.error) {
          setEmailFilledInfo(res.data.error);
        }
        if (res && res.data.email) {
          setEmailFilledInfo(5);
        }
      });
    };
    checkUserExist(userEmail);
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <React.Fragment>
      <Box mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Grid container spacing={3} className={classes.addressPaper}>
                <Typography variant="h6" gutterBottom>
                  Dane adresowe nadawcy
                </Typography>
                <Grid item xs={10}>
                  <InputField
                    name={senderName.name}
                    label={senderName.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    name={senderAddress.name}
                    label={senderAddress.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={senderCity.name} label={senderCity.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    name={senderZip.name}
                    label={senderZip.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    name={senderContact.name}
                    label={senderContact.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    // type="number"
                    name={senderPhone.name}
                    label={senderPhone.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <SelectField
                    name={senderCountry.name}
                    label={senderCountry.label}
                    data={countries}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.addressMobilePaper}>
              <Grid container spacing={3} className={classes.addressPaper}>
                <Typography variant="h6" gutterBottom>
                  Dane adresowe odbiorcy
                </Typography>
                <Grid item xs={10}>
                  <InputField
                    name={recipientName.name}
                    label={recipientName.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    name={recipientAddress.name}
                    label={recipientAddress.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField name={recipientCity.name} label={recipientCity.label} fullWidth />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    name={recipientZip.name}
                    label={recipientZip.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    name={recipientContact.name}
                    label={recipientContact.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <InputField
                    // type="number"
                    name={recipientPhone.name}
                    label={recipientPhone.label}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <SelectField
                    name={recipientCountry.name}
                    label={recipientCountry.label}
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
