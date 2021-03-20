import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ship from '../assets/images/statek.jpg';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import Box from '@material-ui/core/Box';

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

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [resetInfo, setResetInfo] = useState('');
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'https://najtanszapaczkaszwecja.pl/api/user/reset_password';

        try {
            const userEmail = {"email": email };
    
            const responseCheckedEmail = await Axios.post(url, userEmail, {
                auth: {
                  username: 'shovv', 
                  password: '$HOVV2020'
                }
            })

            console.log(responseCheckedEmail)

            if(responseCheckedEmail.data.valid) {
                setResetInfo('Na podany email wysłany został link resetujący hasło.')
                setEmail('')
                setError('')
            }

            if(responseCheckedEmail.data.error === 3) {
                setError('Konto o podanym emailu nie istnieje')
                setResetInfo('')
            } else if(responseCheckedEmail.data.error === 1) {
                setError('Konto o podanym emailu nie zostało aktywowane.')
                setResetInfo('')
            } else if(responseCheckedEmail.data.error === 2) {
                setError('Konto o podanym emailu zostało zablokowane z powodu naruszeń.')
                setResetInfo('')
            } else if(responseCheckedEmail.data.error === 5) {
                setError('Niepoprawne dane wejściowe')
                setResetInfo('')
            }
        } catch(err) {
            setError(error)
            console.log(error)
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                {/* <Grid item>
                    {valid ? 
                    <Typography variant="body1" className={classes.green}>
                        Twoje konto zostało pomyślnie aktywowane.
                    </Typography> 
                    : null
                    }
                </Grid> */}
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Resetowanie hasła
                </Typography>
                <Box mt={2}>
                    <Typography component="h5" variant="body1">
                        Wpisz adres email konta, któremu chcesz zresetować hasło.
                    </Typography>
                </Box>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type="email"
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
                    <div className="error-msg">
                        <Typography color="error">{error} </Typography>             
                    </div>
                    <div className="reset-info">
                        <Typography className={classes.green}>{resetInfo} </Typography>             
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                    Resetuj hasło
                    </Button>
                </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default PasswordReset;