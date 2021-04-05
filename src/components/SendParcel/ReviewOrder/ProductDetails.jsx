import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid, Paper, Box, makeStyles } from '@material-ui/core';
import useStyles from './styles';
import boxImg from '../../../assets/images/formImages/box.svg';
import palletImg from '../../../assets/images/formImages/wholesale.svg';
import truckImg from '../../../assets/images/formImages/truck.svg';
import couchImg from '../../../assets/images/formImages/couch.svg';
import trailerImg from '../../../assets/images/formImages/trailer.svg';
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
                <Grid xs={12} item container>
                  {
                    formValues.packages.map((p, idx) => {
                      return (
                        <Grid container key={idx}>
                          <Grid item xs={4} sm={1}>
                            <img className={classes.imgWidth} src={boxImg} alt='icon'/>
                          </Grid>
                          <Grid className={classes.row} item container xs={12} sm={2}>
                            <Grid item className={classes.cell} container >
                              <Grid item >
                                <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                  typ pakowania
                                </Typography>
                              </Grid>
                              <Grid item>
                                {p.packageType == 1 ? <Typography variant="body2">karton lub koperta</Typography> : null}
                                {p.packageType == 2 ? <Typography variant="body2">folia stretch</Typography> : null}
                                {p.packageType == 3 ? <Typography variant="body2">folia bąbelkowa</Typography> : null}
                                {p.packageType == 4 ? <Typography variant="body2">przesyłka niestandardowa</Typography> : null}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid className={classes.row} item container xs={12} sm={1}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    waga
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.packageWeight + ' kg'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                            <Grid item className={classes.cell} container >
                              <Grid item >
                                <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                  wysokość
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="body2">{p.packageHeight + ' cm'}</Typography>
                              </Grid>
                            </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                            <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    Szerokość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.packageWidth + ' cm'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                            <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    długość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.packageLength + ' cm'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={1}>
                            <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    ilość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.packageAmount + ' cm'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                        </Grid>
                      )
                    })
                  }
                  {
                    formValues.pallets.map((p, idx) => {
                      return (
                        <Grid container key={idx}>
                          <Grid item xs={4} sm={1}>
                            <img className={classes.imgWidth} src={palletImg} alt='icon'/>
                          </Grid>
                          <Grid className={classes.row} item container xs={12} sm={2}>
                            <Grid item className={classes.cell} container >
                              <Grid item >
                                <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                  typ pakowania
                                </Typography>
                              </Grid>
                              <Grid item>
                                {p.palletType == 1 ? <Typography variant="body2">europaleta</Typography> : null}
                                {p.palletType == 2 ? <Typography variant="body2">inna</Typography> : null}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid className={classes.row} item container xs={12} sm={1}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    waga
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.palletWeight + ' kg'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    wysokość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.palletHeight + ' cm'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    szerokość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.palletWidth + ' cm'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    długość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.palletLength + ' cm'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={1}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    ilość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{p.palletAmount}</Typography>
                                </Grid>
                              </Grid>
                          </Grid>                                                  
                        </Grid>
                      )
                    })
                  }

                  {
                    formValues.vehicles.map((v, idx) => {
                      return (
                        <Grid container key={idx}>
                          <Grid item xs={4} sm={1}>
                            <img className={classes.imgWidth} src={truckImg} alt='icon'/>
                          </Grid>
                          <Grid className={classes.row} item container xs={12} sm={2}>
                            <Grid item className={classes.cell} container >
                              <Grid item >
                                <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                  typ pakowania
                                </Typography>
                              </Grid>
                              <Grid item>
                                {v.vehicleType == 1 ? <Typography variant="body2">osobowy</Typography> : null}
                                {v.vehicleType == 2 ? <Typography variant="body2">dostawczy</Typography> : null}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid className={classes.row} item container xs={12} sm={1}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    marka
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{v.vehicleBrand}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    model
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{v.vehicleModel}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                          
                          {v.vehicleWeight ?
                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    waga
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{v.vehicleWeight + ' kg'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> : null }

                          {v.vehicleLength ?
                          <Grid className={classes.row} item container xs={12} sm={1}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    długość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{v.vehicleLength + ' m'}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> : null }
                        </Grid>  
                      )
                    })
                  }
                  {
                    formValues.furnitures.map((f, idx) => {
                      return (
                        <Grid container key={idx}>
                          <Grid item xs={4} sm={1}>
                            <img className={classes.imgWidth} src={couchImg} alt='icon'/>
                          </Grid>

                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    mebel
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{f.furnitureName}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 

                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    ilość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{f.furnitureAmount}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
                        </Grid>
                      )
                    })
                  }
                  {
                    formValues.cargo.map((c,idx) => {
                      return (
                        <Grid container key={idx}>
                          <Grid item xs={4} sm={1}>
                            <img className={classes.imgWidth} src={trailerImg} alt='icon'/>
                          </Grid>
                         

                            
                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    twój ładunek
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{c.cargoName}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 

                          <Grid className={classes.row} item container xs={12} sm={2}>
                              <Grid item className={classes.cell} container >
                                <Grid item >
                                  <Typography className={classes.titleSummary} variant="h6" gutterBottom>
                                    ilość
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2">{c.cargoAmount}</Typography>
                                </Grid>
                              </Grid>
                          </Grid> 
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
