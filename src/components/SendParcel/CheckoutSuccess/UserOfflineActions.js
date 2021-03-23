import { Button } from '@material-ui/core';
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
                  <h5>5 = uzytkownik istnieje, popros o logowanie</h5>
                  <h1>Aby wycenić Twoją przesyłkę musisz być zalogowany</h1>
                  <Login />
                </>
              ) : null
            }
        </>
      ) : null}
    </>
  );
}

export default UserOfflineAction;
