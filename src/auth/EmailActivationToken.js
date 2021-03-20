import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios';
import Login from './Login';


function EmailActivationToken() {
    const [ activationError, setActivationError ] = useState('');
    const [ valid, setValid ] = useState();
    let { id } = useParams();
    
    useEffect(() => {
        //wyslanie zapytania o kod z linku aktywacyjnego
        const getActivationToken = () => {
          if(id === undefined) return;
            
          const emailActivationToken = {"token": id};
          Axios.post('https://najtanszapaczkaszwecja.pl/api/user/activation', emailActivationToken, {
            headers: { 
                'Content-Type': 'application/json'
            },
            auth: {
              username: 'shovv', 
              password: '$HOVV2020'
            }
          })
            .then(response => {
                if(response.data.valid) {
                    setValid(response.data.valid)
                }

                if(response.data.error) {
                    setActivationError(response.data.error);
                }
                console.log(response);
            })
        };
        getActivationToken();
    
    }, [id]);

    console.log(activationError);
    return (
        <Login activationError={activationError} valid={valid}/>
    )
}

export default EmailActivationToken;
