import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Dziekujemy za nadanie przesyłki
      </Typography>
      <Typography variant="subtitle1">
        Skontaktujemy się z Tobą w celu ustalenia szczegółów transportu Twojej przesyłki
      </Typography>
      <p>W razie pytań możesz skontaktować się z nami pod numerem: 123 123 123</p>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
