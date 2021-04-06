import React, { useState, useContext, useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import UserContext from '../../../context/userContext';
import UserOfflineActions from './UserOfflineActions';
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
////wysylanie paczki

function CheckoutSuccess() {
  const { userData, orderId } = useContext(UserContext);
  const [error, setError] = useState('');
  const history = useHistory();

  //PRZPISANIE PACZKI DO ZALOGOWANEGO USERA

  useEffect(() => {
        let orderId = localStorage.getItem('order_id')
        let userId = localStorage.getItem('user-id');

        // if(orderId === null) {
        //     localStorage.setItem('order_id', '');
        //     orderId = '';
        // }

          const asignOrderToUser = async () => {
            try {
            
            const data = {"order_id": orderId, "user_id": userId }
            console.log('CHECKOUTSUCCESS - DANE PRZED WYSLANIEM', data)
            
              const assign = await Axios.post('https://najtanszapaczkaszwecja.pl/api/orders/assign', data,  {
                  headers: { 
                    'Content-Type': 'application/json'
                  },
                  auth: {
                    username: 'shovv', 
                    password: '$HOVV2020'
                  }
                  })
                .then(res => {
                  localStorage.setItem('order_id', '')
                  
                    console.log('PRZYPISANIE ORDER DO UZYTKOWNIKA ktory jest ZALOGOWANY', res) 
                })
              } catch(err) {
                err.response.data.msg && setError(err.response.data.msg)
              }     
            }
            asignOrderToUser()
  }, [orderId])

  return (
    <React.Fragment>
      { userData.user ?
      <>
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Dziekujemy za nadanie przesyłki
          </Typography>
          <Typography variant="subtitle1">
            Skontaktujemy się z Tobą w celu ustalenia szczegółów transportu Twojej przesyłki
          </Typography>
          <p>W razie pytań możesz skontaktować się z nami pod numerem: +48 735 130 862 </p>
          <Button onClick={() => history.push('/')} variant="contained" color="primary">Wróć do strony głównej</Button>
        </Box>
      </> :
        (
          <UserOfflineActions />
        )
      }
    </React.Fragment>
  );
}

export default CheckoutSuccess;
