import { Button, Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import Login from '../../../auth/Login';
import Register from '../../../auth/Register';
import userContext from '../../../context/userContext';
import { useHistory } from 'react-router-dom';


function UserOfflineAction() {
  const { filledEmailInfo, userData } = useContext(userContext);
  const history = useHistory();
  console.log('info odnosnie emaila wpisanego w formie', filledEmailInfo);
  console.log('sprawdzenie contextu po zalogowaniu', userData.user)
  return (
    <>
      {filledEmailInfo === 3 ? (
        <>
          {/* <h2>Twoja przesyłka zostanie wyceniona, gdy ukończysz rejestrację </h2>
          <h1>Dziękujemy za wysłanie </h1> */}
          {history.push('/rejestracja')}
          {/* <Register /> */}
        </>
      ) : null}
      {filledEmailInfo === 1 ? (
        <h1>
         Twoje konto jest nieaktywne. Wejdź w link aktywacyjny, który wysłaliśmy na Twojego emaila
        </h1>
      ) : null}
      {filledEmailInfo === 2 ? (
        <h5>2 = uzytkownik zablokowany - Informacja o zablokowaniu</h5>
      ) : null}
      {filledEmailInfo === 5 ? (
        <>
            {
              userData.user === undefined ? (
                <>
                  <Box mt={5}>
                    <Typography variant="h5" gutterBottom>
                      Dziekujemy za wypełnienie formularza, już prawie koniec!
                    </Typography>
                    <Typography variant="subtitle1">
                      Zaloguj się, aby dokończyć wycenę.
                    </Typography>
                    <p>W razie pytań możesz skontaktować się z nami pod numerem: +48 735 130 862 </p>
                  </Box>
                  <Box mt={5}>
                    <Login />
                  </Box>
                </>
              ) : null
            }
        </>
      ) : null}
    </>
  );
}

export default UserOfflineAction;
