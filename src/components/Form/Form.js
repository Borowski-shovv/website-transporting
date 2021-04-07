import React, {useState} from 'react';
import Axios from "axios";
import {Link} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './Form.css';
import {Grid, Container, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    submit: {
        marginTop: '20px',
        backgroundColor: '#f44336',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'rgb(170, 46, 37)',
        }
    },
})


const Form = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMsg, setInputMsg] = useState('');

    const [mailSend, setMailSend] = useState(false);
    const [error, setError] = useState(false);

    const classes = useStyles()

    const onChange = (value) => {
      console.log("Captcha value:", value)
    }

    const handleFormSubmit = async (e) => { 
        e.preventDefault();

        let url = 'https://transport-szwecja.com/api/contact'

        try {
            const data = {"email": inputEmail, "name": inputName, "message": inputMsg}

            let recaptcha = localStorage.getItem('_grecaptcha')
            console.log(recaptcha === '', '1')
            console.log(recaptcha === null, '2')
            console.log(recaptcha === undefined, '3')

            if (recaptcha === null || recaptcha === '' || recaptcha === undefined) {
                localStorage.setItem('_grecaptcha', '');
                recaptcha = '';

                setError(true)
            } else if(recaptcha !== '') {
                const sendMessage = await Axios.post(url, data, {
                    auth: {
                        username: 'shovv',
                        password: '$HOVV2020'
                    }
                }).then(response => {
                    response.data.valid && setMailSend(true)
                    setError(false)
                    setInputName('')
                    setInputEmail('')
                    setInputMsg('')
                    localStorage.removeItem('_grecaptcha');
                })
            }
        } catch(err) {
            console.log(err)
        }
    };
 
    return (
        <div className="form-wrapper">
            <Container>
            <CssBaseline />
           
                <Grid container item  justify="space-between" spacing={3}>
                    <Grid item container xs={12} sm={6} justify="center">
                        <div className="section-title">
                            <h3 className="card-title">Napisz do nas </h3>
                        </div>
                        <form onSubmit={handleFormSubmit} className="form">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                label= "Twoje imię i nazwisko"
                                name="name"
                                autoFocus
                                id="1"                                
                                onChange={e => setInputName(e.target.value)}
                                value={inputName}                                
                            />
                            <TextField
                                variant="outlined"
                                type="email"
                                label= "Email"
                                name="email"
                                fullWidth
                                margin="normal"
                                required
                                id="3"                                
                                value={inputEmail}                                
                                onChange={e => setInputEmail(e.target.value)}
                            />
                            <TextField
                                id="4"
                                label="Twoja wiadomość"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={e => setInputMsg(e.target.value)} 
                                value={inputMsg}
                                fullWidth
                                name="msg"
                                margin="normal"
                                required
                            />
                            <div className="">
                                <ReCAPTCHA
                                    sitekey="6Ldc5Z8aAAAAAHPk6ZWYRm9ZjW3KZbhCaaP8uIvk"
                                    onChange={onChange}
                                />
                                <Button variant="contained" className={classes.submit} type="submit">Wyślij</Button>
                            </div>
                            <div>
                                {mailSend && <div className="success">Twoja wiadomość została pomyślnie wysłana! Dziękujemy</div>}
                                {error && <div className="error">Zaznacz, że nie jesteś robotem</div>}
                            </div>
                        </form>
                    </Grid>
                    <Grid item container spacing={3} xs={12} sm={4} className="icons-side">
                        <Grid item xs={12} className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>Białystok, Polska.</h3>
                                <p>ul. Strzelecka 6</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-tablet"></i>
                                </span>
                                <div className="media-body">
                                    <a href="tel:+48713333222">
                                        +48 735 130 862
                                    </a>
                                    <br></br>
                                    <a href="tel:+48713333222">
                                        +46 764 012 966
                                    </a>                              
                                </div>
                        </Grid>
                        <Grid item xs={12} className="media-body contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <a href="mailto:biuro@transport-szwecja.com">biuro@transport-szwecja.com</a>
                                    <p>Wyślij do nas wiadomość!</p>
                                </div>
                        </Grid>
                        <Grid item xs={12} className="media-body contact-info">
                            <span className="contact-info__icon"><i className="fa fa-facebook"></i></span>
                            <div className="media-body">
                                <a target="_blank" href="https://www.facebook.com/solidfachtransport">
                                    fb/solidfachtransport
                                </a>
                                <p>Sprawdź nas na facebooku!</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className="contact-info">
                                <Link style={{display: 'flex'}}  
                                    target="_blank" 
                                    to={{pathname: "https://www.instagram.com/solidfach_plse"}}>
                                    <span className="contact-info__icon" ><i className="fa fa-instagram"></i></span>
                                    <div className="media-body">
                                    @solidfach_plse
                                    <p>Sprawdź nasz Instagram!</p>
                                    </div>
                                </Link>                        
                        </Grid>
                    </Grid>
                </Grid>
           
            </Container>
        </div>
    )
}
 


export default Form;