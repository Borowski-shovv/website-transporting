import React, { useContext, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import UserContext from '../../../context/userContext';
import UserOfflineActions from './UserOfflineActions';


////wysylanie paczki

function CheckoutSuccess() {
  const { userData } = useContext(UserContext);

  return (
    <React.Fragment>
      { userData.user ?
      <>
        <Typography variant="h5" gutterBottom>
          Dziekujemy za nadanie przesyłki
        </Typography>
        <Typography variant="subtitle1">
          Skontaktujemy się z Tobą w celu ustalenia szczegółów transportu Twojej przesyłki
        </Typography>
        <p>W razie pytań możesz skontaktować się z nami pod numerem: 123 123 123</p>
        <p>BUTTON DO STRONY GLOWNEJ</p>
      </> :
        (
          <UserOfflineActions />
        )
      }
    </React.Fragment>
  );
}

export default CheckoutSuccess;
