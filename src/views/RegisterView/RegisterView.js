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
import bridge from '../../assets/images/road.jpg';

import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
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
  }
}));

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [error, setError] = useState('');
  const [isFirm, setIsFirm] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'https://najtanszapaczkaszwecja.pl/api/users/create';

        if (password !== passwordVerify) {
            setError('Podane hasła nie są takie same')
        } else {
            // make API call
            try {
              //basic auth -> pozwala wyslać zapytanie na backend zeby uwierzytelnic wiarygodnosc
              const newUserData = {"name": name,"email": email,"phone": phone,"address": address,"zip_code": zipcode,"city": city, "country":country,"password": password, 'type': isFirm}
              const loginRes = await Axios.post(url, newUserData, {
                auth: {
                  username: 'shovv', 
                  password: '$HOVV2020'
                },
              })
              localStorage.setItem("auth-token", loginRes.data.token)
              history.push('/');
              
              } catch(err) {
                err.response.data.msg && setError(err.response.data.msg)
              }
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
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                label="Imię i nazwisko"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Adres Email"
              name="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Numer telefonu"
                name="phone"
                autoFocus
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="address"
                label="Adres"
                type="text"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="zipcode"
                label="Kod pocztowy"
                type="text"
                id="zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="city"
                label="Miasto"
                type="text"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="country"
                label="Państwo"
                type="text"
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="checkpassword"
              label="Powtórz hasło"
              type="password"
              id="checkpassword"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isFirm}
                        onChange={() => setIsFirm(!isFirm)}
                        name="isFirm"
                        color="primary"
                    />
                }
                label="Konto firmowe"
            /> 
            <div className="error-msg">
                <Typography variant="body1" color="error">{error} </Typography>           
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Zarejestruj się
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
