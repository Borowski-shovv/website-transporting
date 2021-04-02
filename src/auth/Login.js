import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import bridge from '../assets/images/bridge.jpg';
import UserContext from '../context/userContext';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css'

const useStyles = makeStyles((theme) => ({
  root: {
  
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
  green: {
    color: 'green'
  },
  red: {
    color: 'red'
  }
}));

export default function Login({valid, activationError}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
        e.preventDefault();
    
        let url = 'https://najtanszapaczkaszwecja.pl/api/user/login';
        
        try {
          //basic auth -> pozwala wyslać zapytanie na backend zeby uwierzytelnic wiarygodnosc
          const loginUser = {email, password}
          const loginRes = await Axios.post(url, loginUser, {
            auth: {
              username: 'shovv', 
              password: '$HOVV2020'
            }
          })

          setUserData({
            token: loginRes.data.token,
            id: loginRes.data.id,
            user: loginRes.data.email,
          });
          
          localStorage.setItem("user-token", loginRes.data.token)
          localStorage.setItem("user-id", loginRes.data.id)
          localStorage.setItem("user-email", loginRes.data.email)
          
          setEmail('');
          setPassword('');

          if(loginRes.data.errorMessage) {
              setError(loginRes.data.errorMessage)
          } 
          
          //przypisanie orderu do uzytkownika ktory sie loguje
          let orderId = localStorage.getItem('order_id')
                
          if(orderId === null) {
              localStorage.setItem('order_id', '');
              orderId = '';
          }
          
          const data = {"order_id": orderId, "user_id": loginRes.data.id }
          // console.log('data, ktora jest wysylana po zalogowaniu na backend', data)
          
          Axios.post('https://najtanszapaczkaszwecja.pl/api/orders/assign', data,  {
            headers: { 
              'Content-Type': 'application/json'
            },
            auth: {
              username: 'shovv', 
              password: '$HOVV2020'
            }
            })
          // .then(res => console.log('PRZYPISANIE ORDER DO UZYTKOWNIKA', res))
          
          } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
          }
  }
    
  return (
    <Grid container className='login-content'>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid item>
            { activationError === 11 ? 
              <Typography variant="body1" className={classes.red}>
                Twoje konto zostało już aktywowane
              </Typography> :
              null
            }
            { activationError === 10 ? 
              <Typography variant="body1" className={classes.red}>
                Podany token jest niepoprawny
              </Typography> :
              null
            }
            { activationError === 9 ? 
              <Typography variant="body1" className={classes.red}>
                Problem z zapisem do bazy danych. Skontaktuj się z administratorem strony
              </Typography> :
              null
            }

            {valid ? 
              <Typography variant="body1" className={classes.green}>
                Twoje konto zostało pomyślnie aktywowane.
              </Typography> 
              : null
            }
          </Grid>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logowanie
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adres Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Pamiętaj mnie"
            /> */}
             <div className="error-msg">
                <Typography color="error">{error} </Typography>             
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Zaloguj
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/reset_hasla" variant="body2">
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/rejestracja" variant="body2">
                  {"Nie masz jeszcze konta? Zarejestruj się"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
