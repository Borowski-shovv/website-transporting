import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import bridge from '../assets/images/road.jpg';
import CheckboxField from '../components/SendParcel/FormFields/CheckboxField'
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { array, boolean,ref, number, object, string, ValidationError } from 'yup';

import { FormGroup, Box } from '@material-ui/core';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: '100vh',
  // },
  image: {
    backgroundImage: `url(${bridge})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  checkbox: {
      width: 'auto',
  },
  formControl: {
    marginTop: '8px',
  },
  input: {
    padding: '14.5px 14px'
  },
  button: {
    backgroundColor: '#bf1e2e',
    color: 'white',
  }
}));

export default function Register() {
  const [error, setError] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = async (values) => {
     
        let url = 'https://najtanszapaczkaszwecja.pl/api/users/create';

       
            // make API call
            try {
              //basic auth -> pozwala wyslać zapytanie na backend zeby uwierzytelnic wiarygodnosc
              const newUserData = {"name": values.name,"email": values.email,"phone": values.phone,"address": values.address,"zip_code": values.zipcode,"city": values.city, "country":values.country,"password": values.password, 'type': values.isFirm}
              const loginRes = await Axios.post(url, newUserData, {
                auth: {
                  username: 'shovv', 
                  password: '$HOVV2020'
                },
              })
            // localStorage.setItem("auth-token", loginRes.data.token)
              // history.push('/aktywacja');
              console.log('odpowiedz servera po rejestracji',loginRes);


              if(loginRes.data.error === 7) {
                setError('Konto o padnym adresie email już istnieje.')
              } else {
                history.push('/aktywacja')
              }
              } catch(err) {
                err.response.data.msg && setError(err.response.data.msg)
              }
        
    }

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Rejestracja
          </Typography>

          <Formik
            initialValues={{
                email: '',
                password: '',
                passwordVerify: '',
                name: '',
                phone: '',
                address: '',
                zipcode: '',
                city: '',
                country: '',

            }}
            validationSchema={object({
                name: 
                    string()
                    .required('To pole jest wymagane')
                    .min(5, 'To pole musi zawierać conajmniej 5 znaków')
                    .max(30, 'To pole może zawierać maksymalnie 30 znaków'),
                email: 
                    string()
                    .email('Wpisz prawidłowy adres email')
                    .required('To pole jest wymagane')
                    .min(5, 'Twój email musi zawierać minimum 5 znaków')
                    .max(30),
                phone:
                    string()
                    .required('To pole jest wymagane')
                    .min(9, 'Numer telefonu musi zawierać conajmniej 9 znaków')
                    .max(20, 'Podany numer telefonu jest za długi'),
                address:
                    string()
                    .required('To pole jest wymagane'),
                zipcode: string().required('To pole jest wymagane'),
                city: string().required('To pole jest wymagane'),
                country: string().required('To pole jest wymagane'),
                password: string().required('To pole jest wymagane').min(6, 'Hasło musi zawierać conajmniej 6 znaków'),
                passwordVerify: string()
                   .oneOf([ref('password'), null], 'Hasła nie mogą się różnić')
            })
       }
       onSubmit={(values,) => {
         // same shape as initial values
         handleSubmit(values);
        
       }}
     >
       {({ values, errors, touched }) => (
         <Form className={classes.form}>
              <FormGroup>
                <Field 
                    name="name" 
                    as={TextField}
                    label="Imię i nazwisko lub nazwa firmy"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.name && touched.name ? (<Typography color="error">{errors.name}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="email" 
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.email && touched.email ? (<Typography color="error">{errors.email}</Typography>) : null}
              </FormGroup>
              <div className="error-msg">
                <Typography color="error">{error} </Typography>             
              </div>
              <FormGroup>
                <Field 
                    name="phone" 
                    as={TextField}
                    label="Numer telefonu"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.phone && touched.phone ? (<Typography color="error">{errors.phone}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="address" 
                    as={TextField}
                    label="Adres"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.address && touched.address ? (<Typography color="error">{errors.address}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="address" 
                    as={TextField}
                    label="Adres"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.address && touched.address ? (<Typography color="error">{errors.address}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="zipcode" 
                    as={TextField}
                    label="Kod pocztowy"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.zipcode && touched.zipcode ? (<Typography color="error">{errors.zipcode}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="city" 
                    as={TextField}
                    label="Miasto"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.city && touched.city ? (<Typography color="error">{errors.city}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="country" 
                    as={TextField}
                    label="Państwo"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.country && touched.country ? (<Typography color="error">{errors.country}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="password" 
                    as={TextField}
                    type="password"
                    label="Hasło"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.password && touched.password ? (<Typography color="error">{errors.password}</Typography>) : null}
              </FormGroup>
              <FormGroup>
                <Field 
                    name="passwordVerify" 
                    as={TextField}
                    type="password"
                    label="Potwierdź hasło"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.passwordVerify && touched.passwordVerify ? (<Typography color="error">{errors.passwordVerify}</Typography>) : null}
              </FormGroup>
              <Box mt={1} mb={2}>
        <CheckboxField className="CheckBoxRules" name="type" type="checkbox" label="Konto firmowe" />
      </Box>
           <Button className={classes.button} variant="contained" type="submit">Zarejestruj się</Button>
           {/* <pre>{JSON.stringify({values, errors}, null, 4)}</pre> */}
         </Form>
       )}
     </Formik>
        </div>
      </Grid>
    </Grid>
  );
}
