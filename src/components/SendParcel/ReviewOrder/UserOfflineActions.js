import React, { useContext } from 'react';
import userContext from '../../../context/userContext';

function UserOfflineAction() {
  const { filledEmailInfo } = useContext(userContext);

  return (
    <>
      {filledEmailInfo === 3 ? (
        <h5>3 = uzytkownik nie istnieje - Rejestracja</h5>
      ) : null}
      {filledEmailInfo === 1 ? (
        <h5>
          1 = uzytkownik nie aktywny - konto nie zostalo jeszcze aktywowane -
          popros o aktywacje
        </h5>
      ) : null}
      {filledEmailInfo === 2 ? (
        <h5>2 = uzytkownik zablokowany - Informacja o zablokowaniu</h5>
      ) : null}
      {filledEmailInfo === 5 ? (
        <h5>5 = uzytkownik istnieje, popros o logowanie</h5>
      ) : null}
    </>
  );
}

export default UserOfflineAction;
