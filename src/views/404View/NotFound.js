import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import './NotFound.css';

function NotFound() {
    const history = useHistory();

    return (
        <div className="not-found-wrapper">
            <Container>
                <Grid container justify="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">Nie znaleziono podanej strony</Typography>
                        <Button className="not-found-btn" variant="contained" onClick={() => {history.push('/')}}>Wróć do strony głównej</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default NotFound
