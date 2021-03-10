import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid, Paper, Box } from '@material-ui/core';
import useStyles from './styles';

function ProductDetails({formValues}) {
  const classes = useStyles();
  return (
    <>
      <Box mt={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper>
                  <Grid container direction="column"  justify="center" alignItems="flex-start" >
                    <Typography variant="h6" gutterBottom>
                      Dane adresowe nadawcy
                    </Typography>
                    <Grid item>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Imię i nazwisko lub nazwa firmy' primary={formValues.firstName} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Adres odbioru przesyłki' primary={formValues.address1} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Miasto' primary={formValues.city} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Kod pocztowy' primary={formValues.zipcode} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Osoba do kontaktu' primary={formValues.contactPerson} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Numer telefonu' primary={formValues.contactNumber} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Państwo' primary={formValues.country} />
                      </ListItem>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper>
                    <Grid container direction="column"  justify="center" alignItems="flex-start">
                      <Typography variant="h6" gutterBottom>
                        Dane adresowe odbiorcy
                      </Typography>
                      <Grid item>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Imię i nazwisko lub nazwa firmy' primary={formValues.firstName2} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Adres odbioru przesyłki' primary={formValues.address2} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Miasto' primary={formValues.city2} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Kod pocztowy' primary={formValues.zipcode2} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Osoba do kontaktu' primary={formValues.contactPerson2} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Numer telefonu' primary={formValues.contactNumber2} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Państwo' primary={formValues.country2} />
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Paper>
              </Grid>
            </Grid>
        {/* <List disablePadding>
          {products.map((product, idx ) => (
            <ListItem className={classes.listItem} key={idx}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              $34.06
            </Typography>
          </ListItem>
        </List> */}

      </Box>
      <Box mt={5}>
          <Paper elevation={3} >
            <Grid container>
              <Grid xs={12} item>
                {
                  formValues.parcel.map((p, idx) => {
                    return (
                      <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                        <Grid item>
                          <p className='p-label'>sposób zapakowania</p>
                        </Grid>  
                        <Grid item>
                          <p className='p-label'>waga paczki</p>
                        </Grid>
                        <Grid item>
                          <p className='p-label'>wysokość paczki</p>
                        </Grid>
                        <Grid item>
                          <p className='p-label'>szerokość paczki</p>
                        </Grid>
                        <Grid item>
                          <p className='p-label'>długość paczki</p>
                        </Grid>
                        <Grid item>
                          <p className='p-label'>ilość takich paczek</p>
                        </Grid>
                      </Grid>
                    )
                  })
                }


              </Grid>

            </Grid>

          </Paper>

      </Box>


    </>
  );
}

export default ProductDetails;
