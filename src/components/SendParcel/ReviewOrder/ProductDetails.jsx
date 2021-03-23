import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid, Paper, Box, makeStyles } from '@material-ui/core';
import useStyles from './styles';
import boxImg from '../../../assets/images/formImages/box.svg';
import palletImg from '../../../assets/images/formImages/wholesale.svg';
import truckImg from '../../../assets/images/formImages/truck.svg';
import couchImg from '../../../assets/images/formImages/couch.svg';
import { CheckboxField } from '../FormFields';
import classNames from 'classnames';

// {p.packageType == 1 ? <div>karton lub koperta</div> : null}
// {p.packageType == 2 ? <div>folia stretch</div> : null}
// {p.packageType == 3 ? <div>folia bąbelkowa</div> : null}
// {p.packageType == 4 ? <div>przesyłka niestandardowa</div> : null}

// const useStyles = makeStyles({
//   TitleCenter: {
//     textAlign: 'center',
//     marginTop: 30,
//   },
// });

function ProductDetails({formValues}) {
  const classes = useStyles();
  // console.log(formValues)

  const handlePackageType = (type) => {

        switch (type) {
          case 1:
            return 'karton lub koperta'
          case 2:
            return 'folia stretch'
          case 3:
            return 'folia bąbelkowa'
          case 4:
            return 'przesyłka niestandardowa'
          default:
            break;
        }
  }
  
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
                        <ListItemText secondary='Imię i nazwisko lub nazwa firmy' primary={formValues.senderName} />
                      </ListItem>
                      <ListItem className={classNames(classes.listItem, classes.columnWidth)}>
                        <ListItemText secondary='Adres odbioru przesyłki' primary={formValues.senderAddress} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Miasto' primary={formValues.senderCity} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Kod pocztowy' primary={formValues.senderZip} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Osoba do kontaktu' primary={formValues.senderContact} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Numer telefonu' primary={formValues.senderPhone} />
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <ListItemText secondary='Państwo' primary={formValues.senderCountry} />
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
                          <ListItemText secondary='Imię i nazwisko lub nazwa firmy' primary={formValues.recipientName} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Adres odbioru przesyłki' primary={formValues.recipientAddress} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Miasto' primary={formValues.recipientCity} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Kod pocztowy' primary={formValues.recipientZip} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Osoba do kontaktu' primary={formValues.recipientContact} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Numer telefonu' primary={formValues.recipientPhone} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                          <ListItemText secondary='Państwo' primary={formValues.recipientCountry} />
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
                    formValues.packages.map((p, idx) => {
                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={boxImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='sposób zapakowania' primary={handlePackageType(p.packageType)} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='waga' primary={p.packageWeight + ' kg'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='wysokość' primary={p.packageHeight + ' cm'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='szerokość' primary={p.packageWidth + ' cm'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='długość' primary={p.packageLength + ' cm'} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość' primary={p.packageAmount} />
                            </ListItem>
                          </Grid>
                
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
                              <ListItemText secondary='rodzaj palety' primary={p.palletType } />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='waga' primary={p.palletWeight + ' kg'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='wysokość' primary={p.palletHeight + ' cm'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='szerokość' primary={p.palletWidth + ' cm'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='długość' primary={p.palletLength + ' cm'} />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość palet' primary={p.palletAmount} />
                            </ListItem>
                          </Grid> 
                          <div className="rowBar"></div> 
                        </Grid>
                      )
                    })
                  }

                  {
                    formValues.vehicles.map((v, idx) => {
                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={truckImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItemSum}>
                              <ListItemText secondary='rodzaj auta' primary={v.vehicleType } />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='marka' primary={v.vehicleBrand } />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='model' primary={v.vehicleModel } />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='waga' primary={v.vehicleWeight } />
                            </ListItem>
                          </Grid>  
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='długość' primary={v.vehicleLength } />
                            </ListItem>
                          </Grid>  
                          <div className="rowBar"></div>
                        </Grid>  
                      )
                    })
                  }
                  {
                    formValues.furnitures.map((f, idx) => {

                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={couchImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            
                            <ListItem className={classes.listItemSum}>
                              <ListItemText secondary='mebel' primary={f.furnitureName} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość' primary={f.furnitureAmount} />
                            </ListItem>
                          </Grid>
                          <div className="rowBar"></div>
                        </Grid>
                      )
                    })
                  }
                  {
                    formValues.cargo.map((c,idx) => {
                      return (
                        <Grid container spacing={2} key={idx}>
                          <Grid item>
                            <img className={classes.imgWidth} src={couchImg} alt='icon'/>
                          </Grid>
                          <Grid item>
                            
                            <ListItem className={classes.listItemSum}>
                              <ListItemText secondary='nazwa ładunku' primary={c.cargoName} />
                            </ListItem>
                          </Grid>
                          <Grid item>
                            <ListItem className={classes.listItem}>
                              <ListItemText secondary='ilość' primary={c.cargoAmount} />
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
        <CheckboxField className="CheckBoxRules" color="primary" name="rules" type="checkbox" label="Akceptuję postanowienia Regulaminu i Polityki prywatności" />
      </Box>
    </>
  );
}

export default ProductDetails;
