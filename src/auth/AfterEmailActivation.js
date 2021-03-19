import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios';

function UserEmailActivation() {
    const [ activationError, setActivationError ] = useState('');
    const [ valid, setValid ] = useState()
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
            })
        };

        getActivationToken();
    
    }, [id]);

    console.log(activationError);
    return (

        <div>
            {activationError && activationError === 11 ? "Twoje konto zostało już aktywowane. Przejdź do strony logowania > Button" : null}
            {activationError && activationError === 10 ? "Podany token jest niepoprawny" : null}
            {activationError && activationError === 9 ? "Problem z zapis do bazy danych. Skontaktuj się do bazy danych" : null}
            {activationError && activationError === 5 ? "Niepoprawne dane wejściowe" : null}

            {valid ? <h2>Dziękujemy za aktywacje konta. Przejdź do strony logowania  BUTTON</h2> : null }

        </div>
    )
}

export default UserEmailActivation;
