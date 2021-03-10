import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import ProductDetails from './ProductDetails';


// renderowanie warunkowe 
// sprawdzenie czy uzytkownik jest zalogowany jezeli jest to wyswietlic podsumowanie zamowienia
// jezeli email istnieje w bazie danych, a user nie jest zalogowany to poproszenie się o zalogowanie sie / przypomnienie hasla 
// jezeli email nie istnieje to poproszenie o rejestracje;
// podsumowanie zamowienia z danymi 

const useStyles = makeStyles({
  TitleCenter: {
    textAlign: 'center',
    marginTop: 30,
  },
})

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.TitleCenter} gutterBottom>
        Podsumowanie Twojej wysyłki
      </Typography>

       <ProductDetails formValues={formValues} />
      <Grid container spacing={2}>
        {/* <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} /> */}


      </Grid>
    </React.Fragment>
  );
}
