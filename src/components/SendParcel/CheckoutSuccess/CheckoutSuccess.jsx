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
    </React.Fragment>
  );
}

export default CheckoutSuccess;
