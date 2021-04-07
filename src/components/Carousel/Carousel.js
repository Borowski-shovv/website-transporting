import React from 'react';
import { Paper, Button, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import img1 from './slides/media-1.jpg';
import img2 from './slides/media-2.jpg';
import img3 from './slides/media-3.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        // height: '50vh',
        [theme.breakpoints.up("sm")]: {
            height: '50vh',
        }
    },
    slideImg: {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        [theme.breakpoints.down("sm")]: {
        height: '70vh',
        objectFit: 'cover',
        }
    },
    carouselContent: {
        width: '400px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            padding: '0 20px',
        }
    },
    title: {
        color: 'white',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            fontSize: '20px',
        }
    },
    text: {
        color: 'white',
        textAlign: 'center',
        textShadow: '0px 1px 3px #000',
    },
    button: {
        color: 'white',
        backgroundColor: '#bf1e2e',
        marginTop: '20px',
        "&:hover": {
            backgroundColor: '#d32f2f',
          }
    }
}));

function Item(props) {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div className="">
            <img className={classes.slideImg} src={props.item.img} alt={props.item.name}></img>
            <div className={classes.carouselContent}>
                <h2 className={classes.title}>{props.item.name}</h2>
                <p className={classes.text}>{props.item.description}</p> 
                <Button className={classes.button} onClick={() => history.push('/wycena')} variant="contained">
                    Wyceń przesyłkę
                </Button> 
            </div>
        </div>
    )
}

const MyCarousel = (props) => {
    const classes = useStyles()

    const items = [
        {
            img: img1,
            name: "Szybko oraz bezpiecznie",
            description: "Dzięki zdobytemu doświadczeniu czas dostarczenia Twojej przesyłki jest bardzo krótki, ponadto każda przesyłka jest starannie zabezpieczona"
        },
        {
            img: img2,
            name: "Trasy Polska-Szwecja-Polska",
            description: "Odbierzemy i dowieziemy Twoją przesyłkę w każde miejsce w Polsce"
        },
        {
            img: img3,
            name: "Pomagamy w przeprowadzkach",
            description: "Podczas przeprowadzki nasi kierowcy pomagają w załadowaniu i rozładowaniu Twoich rzeczy"
        },
    ]

    return (
        <Carousel className={classes.root} autoPlay={true} interval={3000} animation="fade"
        indicatorIconButtonProps={{
            style: {
                display: 'none',
            }
        }}>
         
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
     
        </Carousel>
    )
}

export default MyCarousel;

