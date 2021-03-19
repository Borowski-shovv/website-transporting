import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import Axios from 'axios';
import { Button, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: 'gray',
        height: '100vh',
    },
    // button: {
    //     backgroundColor: '#bf1e2e',
    //     color: 'white',
    // }
}))


function UserEmailActivation() {
    const [ activationInfo, setActivationInfo ] = useState();
    const classes = useStyles();
    let { id } = useParams();
    // console.log(id)
    const history = useHistory();

    useEffect(() => {
        //wyslanie zapytania o kod z linku aktywacyjnego
        const getActivationToken = () => {
          if(id === undefined) return;
            
          const emailActivationToken = {"token": id};
          Axios.post('https://najtanszapaczkaszwecja.pl/api/user/activation', emailActivationToken, {
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            auth: {
              username: 'shovv', 
              password: '$HOVV2020'
            }
          })
            .then(response => {
                console.log({response})
                setActivationInfo(response.data);
            })
        };
        getActivationToken();
    
    }, [id]);



    return (
        <div className={classes.root}>
            {activationInfo ? (
                <>
                <Grid container>
                    <Grid item>
                  
                            <Typography variant="body1">Dziękujemy za aktywacje konta</Typography>
                            <Typography variant="body1">Przejdź do strony logowania, aby się zalogować</Typography>
                            <Button variant="contained" color="primary" onClick={() => history.push('/logowanie')}>Strona logowania</Button>
                   
                    </Grid>
                </Grid>
                </>
            ) : (
                <>
                <h2>Wygeneruj ponownie token aktywacyjny</h2>
                
                </>
            ) }

            {/* zapisanie informacji z backendu do contextAPI 
                i na podstawie tych informacji pokazywać 
                
            
            */}
            {/* button kontynuuj  */}
        </div>
    )
}

export default UserEmailActivation;
