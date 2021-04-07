import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import './NotFound.css';
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


function NotFound() {
    const history = useHistory();
    const classes = useStyles()

    return (
        <div className="not-found-wrapper">
            <Container>
                <Grid container justify="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">Nie znaleziono podanej strony</Typography>
                        <Button className={classes.submit} variant="contained" onClick={() => {history.push('/')}}>Wróć do strony głównej</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default NotFound
