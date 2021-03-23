import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import ProductDetails from './ProductDetails';
import './ReviewOrder.css';

const useStyles = makeStyles({
  TitleCenter: {
    textAlign: 'center',
    marginTop: 30,
  },
});

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.TitleCenter} gutterBottom>
        Podsumowanie Twojej wysyłki
      </Typography>
      <ProductDetails formValues={formValues} />
    </React.Fragment>
  );
}
