import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import companyPhoto from '../../assets/images/aboutsolidfach.jpg'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    text: {
        margin: '0 0 20px 0',
        fontFamily: 'Poppins, sans-serif'
    }
})

function AboutSolidFach() {
    const classes = useStyles();

    return (
        <section className='section-wrapper'>
            <Container className="about-section-wrapper">
                <Grid container spacing={3} justfiy="center">
                    <Grid item container xs={12} sm={6} className="ml-auto" >
                        <img src={companyPhoto} alt="truck" />
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={6}>
                        <Grid item className="section-title">
                            <h3 className="card-title">O firmie</h3>
                        </Grid>
                        <Grid item container direction="column">
                            <Typography className={classes.text} variant="body2">
                                Jesteśmy firmą z 20 letnim doświadczeniem. Dzięki zdobytemu doświadczeniu wybieramy najbardziej optymalne trasy, aby odbiorca jak najszybciej cieszył się swoją przesyłką 
                            </Typography>
                            <Typography className={classes.text} variant="body2">
                                Specjalizujemy się w przeprowadzkach, transporcie ładunków drobnicowych jak i cało pojazdowych oraz materiałów delikatnych i ponadgabarytowych tj. okien XXL, szkła luster (w dużych taflach), blatów kamiennych i innych nietypowych ładunków. Można zlecić nam przewóz większego  jak i mniejszego ładunku, począwszy od drobnych sprzętów RTV – AGD, walizek, narzędzi oraz materiałów budowlanych, kończąc na rowerach, motocyklach, oknach oraz wielu innych. Po wcześniejszym porozumieniu nadawcy z odbiorcą wysyłki, transportujemy również zwierzęta. O wszystkie powierzone nam przesyłki dbamy z należytą ostrożnością</Typography>
                            <Typography className={classes.text} variant="body2">
                                Nasi klienci posiadają gwarancję pełnej organizacji oraz obsługi transportu z naszej strony. Obsłużyliśmy już setki zadowolonych klientów!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default AboutSolidFach
