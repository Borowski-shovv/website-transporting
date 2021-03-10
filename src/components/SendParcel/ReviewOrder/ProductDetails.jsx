import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid, Paper, Box } from '@material-ui/core';
import useStyles from './styles';
import boxImg from '../../../assets/images/formImages/box.svg';
import palletImg from '../../../assets/images/formImages/wholesale.svg';
import truckImg from '../../../assets/images/formImages/truck.svg';
import couchImg from '../../../assets/images/formImages/couch.svg';
import { CheckboxField } from '../FormFields';

function ProductDetails({formValues}) {
  const classes = useStyles();
  return (
    <>
      <Box mt={5}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <Grid container direction="column"  justify="center" alignItems="flex-start" >
                    <Typography variant="h6" gutterBottom className={classes.title}>
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
                  <Paper elevation={3}>
                    <Grid container direction="column"  justify="center" alignItems="flex-start">
                      <Typography variant="h6" gutterBottom className={classes.title}>
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
      </Box>
      <Box mt={5} className="summaryTable">
          <Paper elevation={3} >
            <Grid container >
                <Grid xs={12} item>
                  {
                    formValues.parcel.map((p, idx) => {
                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={boxImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='sposób zapakowania' primary={p.kindOfpackage} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='waga' primary={p.weight + ' kg'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='wysokość' primary={p.weight + ' cm'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='szerokość' primary={p.weight + ' cm'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='długość' primary={p.weight + ' cm'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość' primary={p.amount} />
                            </ListItem>
                          </Grid>
                          <div className="rowBar"></div>
                        </Grid>
                      )
                    })
                  }
                  {
                    formValues.pallet.map((p, idx) => {
                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={palletImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItemSum}>
                              <ListItemText secondary='rodzaj palety' primary={p.type } />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='waga' primary={p.weight + ' kg'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='wysokość' primary={p.height + ' cm'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='szerokość' primary={p.width + ' cm'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='długość' primary={p.length + ' cm'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość palet' primary={p.amount} />
                            </ListItem>
                          </Grid> 
                          <div className="rowBar"></div> 
                        </Grid>
                      )
                    })
                  }

                  {
                    formValues.car.map((c, idx) => {
                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={truckImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItemSum}>
                              <ListItemText secondary='rodzaj auta' primary={c.type } />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='marka' primary={c.brand } />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='model' primary={c.model } />
                            </ListItem>
                          </Grid>  
                          <div className="rowBar"></div>
                        </Grid>  
                      )
                    })
                  }

                  {
                    formValues.removal.map((f, idx) => {

                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={couchImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            
                            <ListItem className={classes.listItemSum}>
                              <ListItemText secondary='mebel' primary={f.name} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość' primary={f.amount} />
                            </ListItem>
                          </Grid>
                          <div className="rowBar"></div>
                        </Grid>
                      )
                    })
                  }

                </Grid>
            </Grid>
          </Paper>
      </Box>
        
      <Box mt={5}>
        <CheckboxField className="CheckBoxRules" name="rules" type="checkbox" label="Akceptuję postanowienia Regulaminu i Polityki prywatności" />
      </Box>
    </>
  );
}

export default ProductDetails;
