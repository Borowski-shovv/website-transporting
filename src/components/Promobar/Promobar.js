import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#bf1e2e',
        padding: '50px 0',
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 400,
        marginBottom: 20,
    },
    text: {
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        marginBottom: 25,
        textAlign: 'center',
    },
    button: {
      margin: '0 auto',
    }
})

const Promobar = () => {


  const classes = useStyles()

  return (
   <section className={classes.root}>
      <Container>
        <Grid container justify="center" data-aos="fade-in">
          <Grid 
            item
            container
            direction='column'
            justify="center"
            alignItems="center"
          >
                <h3 className={classes.title}>Darmowa wycena</h3>
                <Typography variant="body2" className={classes.text}>
                  Złóż zamówienie, a nasz konsultant skontaktuje się z Tobą w ciągu 15 minut z wyceną Twojej przesyłki
                </Typography>
                
                <Button variant="contained" href="/wycena" className={classes.button}>
                  Wyceń paczkę
                </Button>
          </Grid>
        </Grid>
      </Container>
   </section>
   
  );
};

export default Promobar;
