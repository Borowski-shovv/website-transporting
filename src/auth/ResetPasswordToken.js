import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ship from '../assets/images/statek.jpg';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import {  Formik, Form, Field } from 'formik';
import { ref, object, string } from 'yup';
import { FormGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${ship})`,
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
    green: {
      color: 'green'
    }
  }));

function ResetPasswordToken() {
    let { id } = useParams();
    const history = useHistory();
    const classes = useStyles();
    const [ passwordInfo, setPasswordInfo] = useState('');
    const [ error, setError ] = useState('');
    console.log(id)
    const handleSubmit = async (values) => {

        let url = 'https://najtanszapaczkaszwecja.pl/api/user/new_password';
       
        try {
             const data = {"token": id, 'password': values.password };
    
            const responseGeneratePassword = await Axios.post(url, data, {
                auth: {
                  username: 'shovv', 
                  password: '$HOVV2020'
                }
            })

            console.log(responseGeneratePassword)

            if(responseGeneratePassword.data.valid) {
                setPasswordInfo('Twoje hasło zostało zmienione. Zostaniesz automatycznie przekierowany na strone logowania')
                setError('')
                setTimeout(() => {
                    history.push('/logowanie')
                }, 3000)
            }

            if(responseGeneratePassword.data.error === 10) {
                setError('Niepoprawny token.')
            } else if(responseGeneratePassword.data.error === 1) {
                setError('Nie można zmienić hasła, konto nie zostało jeszcze aktywowane.')
            } else if(responseGeneratePassword.data.error === 2) {
                setError('Nie można zmienić hasła, konto zostało zablokowane')
            } else if(responseGeneratePassword.data.error === 3) {
                setError('Nie można zmienić hasła, konto nie istnieje')
            } else if(responseGeneratePassword.data.error === 5) {
                setError('Niepoprawne dane wejściowe')
            }
        } catch(err) {
             setError(err)
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
                Zmiana hasła
            </Typography>
  
            <Formik
                initialValues={{
                    password: '',
                    passwordVerify: '',
                }}
                validationSchema={object({
                    password: string().required('To pole jest wymagane').min(6, 'Hasło musi zawierać conajmniej 6 znaków'),
                    passwordVerify: string().oneOf([ref('password'), null], 'Hasła nie mogą się różnić')
                })}
                onSubmit={(values,) => {
                    handleSubmit(values);
                }}
            >
                {({ values, errors, touched }) => (
                <Form className={classes.form}>
                        <FormGroup>
                        <Field 
                            name="password" 
                            as={TextField}
                            type="password"
                            label="Nowe hasło"
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
                            label="Potwierdź nowe hasło"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        />
                        {/* <ErrorMessage name="passwordVerify" compontent={Typography} />  */}
                        {errors.passwordVerify && touched.passwordVerify ? (<Typography color="error">{errors.passwordVerify}</Typography>) : null} 
                        </FormGroup>

                        <div className="error-msg">
                            <Typography color="error">{error} </Typography>             
                        </div>
                        <div className="reset-info">
                            <Typography className={classes.green}>{passwordInfo} </Typography>             
                        </div>
                        <Button className={classes.button} color="primary" variant="contained" type="submit">Zmień hasło</Button>
                    {/* <pre>{JSON.stringify({values, errors}, null, 4)}</pre> */}
                </Form>
                )}
            </Formik>
          </div>
        </Grid>
      </Grid>
    )
}

export default ResetPasswordToken
