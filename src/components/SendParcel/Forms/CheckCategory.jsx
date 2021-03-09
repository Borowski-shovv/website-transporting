import React from 'react';
import { Grid, TextField, Typography, Box, MenuItem, FormGroup, Button, Paper} from '@material-ui/core';
import { InputField, InputRadio, CheckboxField, SelectField, UnitField, PackageType } from '../FormFields';
import { useFormikContext, Field, FieldArray, ErrorMessage } from 'formik';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import './CheckCategory.css';
import OrderSummary from './OrderSummary';
import { makeStyles } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const useStyles = makeStyles(theme => ({
    clientChoice: {
       textAlign: 'center',
       marginTop: '50px',
    },
    categoryName: {
        textAlign: 'center',
        marginTop: 0,
        color: '#323232',
    },
    titleCenter: {
        textAlign: 'center',
        margin: '30px',
    },
    red: {
        color: 'red',
    },
    CustomPaper: {
        marginBottom: '20px',
        padding: '30px'
    },
    marginTopBtn: {
        marginTop: '20px',
    },
    errorColor: {
        // borderColor: theme.palette.error.main,
        borderColor: '#000'
    },
    deleteItem: {
        marginLeft: 'auto'
    }
  }))

const kindOfPackage = [
    {
      value: 'karton lub koperta',
      label: 'karton lub koperta'
    },
    {
      value: 'folia stretch',
      label: 'folia stretch'
    },
    {
        value: 'folia bąbelkowa',
        label: 'folia bąbelkowa'
    },
    {
        value: 'przesyłka niestandardowa',
        label: 'przesyłka niestandardowa'
    }
];

const carType = [
      {
          value: 'osobowe',
          label: 'osobowe',
      },
      {
          value: 'dostawcze',
          label: 'dostawcze',
      },
]

const palletType = [
    {
        value: 'europaleta',
        label: 'europaleta'
    },
    {
        value: 'inna',
        label: 'inna',
    }

]

const furnitures = [
    {
        value: 'Inny mebel',
        label: 'Inny mebel'
    },
    {
        value: 'Biurko',
        label: 'Biurko'
    },
    {
        value: 'Łóżko',
        label: 'Łóżko',
    },
    {
        value: 'Łóżko podwójne z materacem',
        label: 'Łóżko podwójne z materacem',
    },
    {
        value: 'Łóżko o dużych rozmiarach',
        label: 'Łóżko o dużych rozmiarach'
    },
    {
        value: 'Fotel',
        label: 'Fotel'
    },
    {
        value: 'Fotel biurowy',
        label: 'Fotel biurowy'
    },
    {
        value: 'Krzesło',
        label: 'Krzesło'
    },
    {   
        value: 'Kanapa',
        label: 'Kanapa'
    },
    {   
        value: 'Komoda',
        label: 'Komoda'
    },
    {
        value: 'Komputer',
        label: 'Komputer'
    },
    {
        value: 'Lodówka',
        label: 'Lodówka'
    },
    {
        value: 'Materac',
        label: 'Materac'
    },
    {
        value: 'Szafa',
        label: 'Szafa'
    },
    {
        value: 'Szafka',
        label: 'Szafka'
    },
    {
        value: 'Szafka RTV',
        label: 'Szafka RTV'
    },
    {
        value: 'Sofa',
        label: 'Sofa'
    },
    {
        value: 'Stół',
        label: 'Stół'
    },
    {
        value: 'Witryna',
        label: 'Witryna'
    },
    {
        value: 'Urządzenie do ćwiczeń',
        label: 'Urządzenie do ćwiczeń'
    },
]

export default function CheckCategory(props) {
    const classes = useStyles()
    const { formField: { email } } = props;
    const { values: formValues, errors } = useFormikContext();

    
    return (
        <>
        <div className="Step1-wrapper">
            <Typography variant="h6" gutterBottom className={classes.titleCenter}>
                Chcę przewieźć
            </Typography>
            <Paper elevation={3} className={classes.CustomPaper}>
                <Grid container justify="center" spacing={2} alignItems="center">
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Paczka</p>
                        <InputRadio categoryname="paczka" className="paczka" type="radio" name="parcelCategory" id="paczka" value="paczka"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Paleta</p>
                        <InputRadio categoryname="paleta" className="paleta" type="radio" name="parcelCategory" id="paleta" value="paleta"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Auto</p>
                        <InputRadio categoryname="auto" className="auto" type="radio" name="parcelCategory" id="auto" value="auto"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Przeprowadzka</p>
                        <InputRadio categoryname="przeprowadzka" className="przeprowadzka" type="radio" name='parcelCategory' id="przeprowadzka" value="przeprowadzka"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Transport ponadgabarytowy</p>
                        <InputRadio categoryname="ponadgabarytowy" className="ponadgabarytowy" type="radio" name='parcelCategory' id="ponadgabarytowy" value="ponadgabarytowy"/>
                    </Grid>
                </Grid>
            </Paper>
           
                {formValues.parcelCategory === "paczka" ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                    <Grid container >
                        <Grid xs={12} item>
                            <FieldArray 
                                name="parcel"
                                render={arrayHelpers => (
                                    <div>
                                            {formValues.parcel.map((parcel, index) => (
                                                <div className="addNewParcel-wrapper" key={index}>
                                                    <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                        {/* <Grid item>
                                                            <p className="p-label">Co chcesz przewieźć ?</p>
                                                            <UnitField className="long-input" variant="outlined" name={`parcel[${index}].name`}/> 
                                                            {/* <UnitField name={`parcel[${index}].name`} variant="outlined"/> 
                                                        </Grid> */}
                                                         <Grid item >
                                                            <p className="p-label">sposób zapakowania*</p>
                                                            <PackageType
                                                                className="long-input"
                                                                variant="outlined"
                                                                name={`parcel[${index}].kindOfpackage`}
                                                                data={kindOfPackage}
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <p className="p-label">waga*</p>
                                                            <UnitField type="number" variant="outlined" name={`parcel[${index}].weight`}  />
                                                        </Grid><p className="p-unit">kg</p>
                                                        <Grid item>
                                                            <p className="p-label">wysokość*</p>
                                                            <UnitField type="number" variant="outlined" name={`parcel[${index}].height`} />
                                                        </Grid><p className="p-unit">cm</p>
                                                        <Grid item>
                                                            <p className="p-label">szerokość*</p>
                                                            <UnitField type="number" variant="outlined" name={`parcel[${index}].width`} />
                                                        </Grid><p className="p-unit">cm</p>
                                                        <Grid item  >
                                                            <p className="p-label">długość*</p>
                                                            <UnitField type="number" variant="outlined" name={`parcel[${index}].length`} />
                                                        </Grid><p className="p-unit">cm</p>
                                                        <Grid item>
                                                            <p className="p-label">ilość*</p>
                                                            <UnitField 
                                                                type="number"
                                                                variant="outlined" 
                                                                name={`parcel[${index}].amount`} 
                                                            />  
                                                        </Grid><p className="p-unit">szt</p>
                                                       
                                                        
                                                        <Button
                                                            type="button"
                                                            onClick={() => arrayHelpers.remove(index)}
                                                        >
                                                            <RemoveCircleIcon color="primary"/>   
                                                        </Button>
                                                    </Grid>
                                                </div>
                                            ))}

                                        <Grid item>
                                            {typeof errors.parcel === 'string' ? <Typography color="error">{errors.parcel}</Typography> : null}
                                        </Grid>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            className={classes.marginTopBtn}
                                            type="button" 
                                            onClick={() => arrayHelpers.push({weight: '', height: '', width: '', length: '', amount: '', kindOfpackage: ''})}>
                                                Dodaj paczkę <AddOutlinedIcon style={{ color: 'white' }}/>
                                        </Button>
                                    </div>
                                )}
                            />   
                        </Grid>
                    </Grid> 
                </Paper>
                : null}

                {formValues.parcelCategory === "paleta" ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Grid container>
                            <Grid xs={12} item>
                                <FieldArray 
                                    name="pallet"
                                    render={arrayHelpers => (
                                        <div>
                                            {formValues.pallet.map((pallet, index) => (
                                                <div className="addNewParcel-wrapper" key={index}>
                                                        <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                            <Grid item >
                                                                <p className="p-label">rodzaj palety*</p>
                                                                <PackageType
                                                                    className="long-input"
                                                                    variant="outlined"
                                                                    name={`pallet[${index}].type`}
                                                                    data={palletType}
                                                                />
                                                            </Grid>
                                                            {/* <Grid item>
                                                                <p className="p-label">rodzaj palety</p>
                                                                <UnitField className="long-input" variant="outlined" name={`pallet[${index}].name`}/>
                                                            </Grid> */}
                                                            <Grid item >
                                                                <p className="p-label">waga*</p>
                                                                <UnitField variant="outlined" name={`pallet[${index}].weight`}  />
                                                            </Grid><p className="p-unit">kg</p>
                                                            <Grid item >
                                                                <p className="p-label">wysokość*</p>
                                                                <UnitField variant="outlined" name={`pallet[${index}].height`} />
                                                            </Grid><p className="p-unit">cm</p>
                                                            <Grid item  >
                                                                <p className="p-label">szerokość*</p>
                                                                <UnitField variant="outlined" name={`pallet[${index}].width`} />
                                                            </Grid><p className="p-unit">cm</p>
                                                            <Grid item  >
                                                                <p className="p-label">długość*</p>
                                                                <UnitField variant="outlined" name={`pallet[${index}].length`} />
                                                            </Grid><p className="p-unit">cm</p>
                                                            <Grid item >
                                                                <p className="p-label">ilość*</p>
                                                                <UnitField
                                                                type="number"
                                                                    variant="outlined" 
                                                                    name={`pallet[${index}].amount`} 
                                                                    />  
                                                                    {console.log(`pallet[${index}].amount`)}
                                                            </Grid><p  className="p-unit">szt</p>
                                                        
                                                            <Button
                                                                className={classes.deleteItem}
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                            >
                                                                <RemoveCircleIcon color="primary"/>   
                                                            </Button>
                                                        </Grid>
                                                    </div>
                                                ))}

                                                <Grid item>
                                                    {typeof errors.pallet === 'string' ? <Typography color="error">{errors.pallet}</Typography> : null}
                                                </Grid>

                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    className={classes.marginTopBtn}
                                                    type="button" 
                                                    onClick={() => arrayHelpers.push({ type: '', weight: '', height: '', width: '', length: '', amount: ''})}>
                                                        Dodaj paletę <AddOutlinedIcon style={{ color: 'white' }}
                                                    />
                                                </Button>
                                        </div>
                                    )}
                                />   
                            </Grid>
                        </Grid> 
                    </Paper>
                : null}
             
                {formValues.parcelCategory === "auto" ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                           <Grid container>
                               <Grid xs={12} item>
                                   <FieldArray 
                                       name="car"
                                       render={arrayHelpers => (
                                           <div>
                                                   {formValues.car.map((car, index) => (
                                                       <div className="addNewParcel-wrapper" key={index}>
                                                           <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                                <Grid item >
                                                                    <p className="p-label">rodzaj auta*</p>
                                                                    <PackageType
                                                                        className="long-input"
                                                                        variant="outlined"
                                                                        name={`car[${index}].type`}
                                                                        data={carType}
                                                                    />
                                                                </Grid>
                                                                
                                                               <Grid item>
                                                                   <p className="p-label">marka*</p>
                                                                   <UnitField className="long-input" variant="outlined" name={`car[${index}].brand`}/>
                                                               </Grid>
                                                               <Grid item>
                                                                   <p className="p-label">model*</p>
                                                                   <UnitField className="long-input" variant="outlined" name={`car[${index}].model`}/>
                                                               </Grid>
                                                               <Grid item>
                                                                    <p className="p-label">masa</p>
                                                                    <UnitField type="number" variant="outlined" name={`car[${index}].weight`} />
                                                                </Grid><p className="p-unit">kg</p>
                                                                <Grid item  >
                                                                    <p className="p-label">długość</p>
                                                                    <UnitField type="number" variant="outlined" name={`car[${index}].length`} />
                                                                </Grid><p className="p-unit">m</p>
                                                              
                                                               <Button
                                                                    className={classes.deleteItem}
                                                                   type="button"
                                                                   onClick={() => arrayHelpers.remove(index)}
                                                               >
                                                                <RemoveCircleIcon color="primary"/>   
                                                               </Button>
                                                           </Grid>
                                                       </div>
                                                   ))}

                                                <Grid item>
                                                    {typeof errors.car === 'string' ? <Typography color="error">{errors.car}</Typography> : null}
                                                </Grid>

                                                   <Button 
                                                       variant="contained" 
                                                       color="primary" 
                                                       className={classes.marginTopBtn}
                                                       type="button" 
                                                       onClick={() => arrayHelpers.push({ type: '', brand: '', model: '', weight: '', length: ''})}>
                                                           Dodaj auto <AddOutlinedIcon style={{ color: 'white' }}
                                                       />
                                                   </Button>
                                           </div>
                                       )}
                                   />   
                               </Grid>
                           </Grid> 
                       </Paper>
                : null}

                {formValues.parcelCategory === "przeprowadzka" ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                           <Grid container>                           
                               <Grid xs={12} item>
                                   <FieldArray 
                                       name="removal"
                                       render={arrayHelpers => (
                                           <div>
                                                    <Typography variant="body2">Jeżeli Twojego przedmiotu na liście, wybierz 'Inny' i uzupełnij pole Inne</Typography>
                                                   {formValues.removal.map((furniture, index) => (
                                                       <div className="addNewParcel-wrapper" key={index}>
                                                           <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                                   <Grid item >
                                                                        <p className="p-label">rodzaj mebla*</p>
                                                                        <PackageType
                                                                            className="long-input"
                                                                            variant="outlined"
                                                                            name={`furniture[${index}].type`}
                                                                            data={furnitures}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item >
                                                                <p className="p-label">ilość*</p>
                                                                <UnitField
                                                                    type="number"
                                                                    variant="outlined" 
                                                                    name={`furniture[${index}].amount`} 
                                                                    />  
                                                                    {console.log(`pallet[${index}].amount`)}
                                                                </Grid><p  className="p-unit">szt</p>
                                                              
                                                           </Grid>
                                                           <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                                     <Grid item>
                                                                   <p className="p-label">Inne</p>
                                                                   <InputField className="long-input" variant="outlined" name={`furniture[${index}].name`}/>
                                                               </Grid>
                                                               <Grid item >
                                                                <p className="p-label">ilość*</p>
                                                                <UnitField
                                                                    type="number"
                                                                    variant="outlined" 
                                                                    name={`furniture[${index}].others-amount`} 
                                                                    />  
                                                                 
                                                                </Grid><p  className="p-unit">szt</p>
                                                                <Button
                                                                className={classes.deleteItem}
                                                                   type="button"
                                                                   onClick={() => arrayHelpers.remove(index)}
                                                               >
                                                                   <RemoveCircleIcon color="primary"/>   
                                                               </Button>
                                                           </Grid>
                                                       </div>
                                                   ))}
                                                   <Button 
                                                       variant="contained" 
                                                       color="primary" 
                                                       className={classes.marginTopBtn}
                                                       type="button" 
                                                       onClick={() => arrayHelpers.push({ type: '', brand: ''})}>
                                                           Dodaj mebel <AddOutlinedIcon style={{ color: 'white' }}
                                                       />
                                                   </Button>
                                           </div>
                                       )}
                                   />   
                               </Grid>
                           </Grid> 
                       </Paper>
                : null}

                {formValues.parcel.length > 0 || formValues.pallet.length > 0 || formValues.car.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Typography variant="h6" gutterBottom>
                            Twoja przesyłka
                        </Typography>
                        <OrderSummary/> 
                    </Paper>
                : null}

                <Paper elevation={3} className={classes.CustomPaper}>
                    <Grid container spacing={2}>
                        <Grid className="email-grid-wrapper" container direction="row" item xs={12} sm={6}> 
                            <InputField name={email.name} label={email.label} fullWidth />
                        </Grid>
                    </Grid>
                </Paper>
        </div>
        </>
    )
}
