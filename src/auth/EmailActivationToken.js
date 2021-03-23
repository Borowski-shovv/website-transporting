import React, {useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios';
import Login from './Login';

function EmailActivationToken() {
    const [ activationError, setActivationError ] = useState('');
    const [ valid, setValid ] = useState();
    let { id } = useParams();
    
    useEffect(() => {
        //wyslanie zapytania o kod z linku aktywacyjnego
        const getActivationToken = async () => {
          if(id === undefined) return;
            
          const emailActivationToken = {"token": id};
          await Axios.post('https://najtanszapaczkaszwecja.pl/api/user/activation', emailActivationToken, {
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
                console.log('1. pierwszy res', response)
                return response
            }).then(dataUser => {
                console.log('2. drugi res data', dataUser)

                let orderId = localStorage.getItem('order_id')
                
                if(orderId === null) {
                    localStorage.setItem('order_id', '');
                    orderId = '';
                }
    
                const data = {"order_id": orderId, "user_id": dataUser.data.user_id }
                console.log('3. drugi res przesylana data', data)
                return (
                    Axios.post('https://najtanszapaczkaszwecja.pl/api/orders/assign', data,  {
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        auth: {
                          username: 'shovv', 
                          password: '$HOVV2020'
                        }
                      }).then(res => console.log('4. odpowiedz po drugim wyslaniu', res))

                )
            }
                
            )

        };

        getActivationToken()
    }, [id]);
    
  
    return (
        <Login activationError={activationError} valid={valid}/>
    )
}

export default EmailActivationToken;
