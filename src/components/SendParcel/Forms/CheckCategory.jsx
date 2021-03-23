import React, { useContext, useState } from 'react';
import { Grid, Typography, Button, Paper} from '@material-ui/core';
import { InputField, UnitField, PackageType } from '../FormFields';
import { useFormikContext, FieldArray } from 'formik';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import './checkCategory.css';
import OrderSummary from './OrderSummary';
import { makeStyles } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import UserContext from '../../../context/userContext';

//testy
import { useField, ErrorMessage } from 'formik';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    clientChoice: {
       textAlign: 'center',
       marginTop: '50px',
    },
    categoryName: {
        // textAlign: 'center',
        marginTop: 0,
        color: '#838383',
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
        padding: '20px'
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
    },
    errorMsg: {
        color: '#f44336',
        marginRight: 'auto'
    }
  }))

const kindOfPackage = [
    {
      value: 1,
      label: 'karton lub koperta'
    },
    {
      value: 2,
      label: 'folia stretch'
    },
    {
        value: 3,
        label: 'folia bąbelkowa'
    },
    {
        value: 4,
        label: 'przesyłka niestandardowa'
    }
];

const carType = [
      {
          value: 1,
          label: 'osobowe',
      },
      {
          value: 2,
          label: 'dostawcze',
      },
]

const palletType = [
    {
        value: 1,
        label: 'europaleta'
    },
    {
        value: 2,
        label: 'inna',
    }

]

export default function CheckCategory(props) {
    const classes = useStyles()
    const { formField: { email } } = props;
    const { values: formValues, errors } = useFormikContext();
    const { userData } = useContext(UserContext);
    //console.log(userData.user)

    return (
        <>
        <div className="Step1-wrapper">
            <Typography variant="h6" gutterBottom className={classes.titleCenter}>
                Chcę przewieźć
            </Typography>
            <Paper elevation={3} className={classes.CustomPaper}>
                <Typography variant="body2" gutterBottom>
                    Wybierz kategorie przesyłki, (możesz wybrać więcej niż jedną)
                </Typography>
                <Grid container justify="center" spacing={2} alignItems="center">
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Paczka</p>
                        <MyCheckbox categoryname="paczka" className="paczka" name="parcelCategory" value="paczka"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Paleta</p>
                        <MyCheckbox categoryname="paleta" className="paleta" name="parcelCategory" value="paleta"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Auto</p>
                        <MyCheckbox categoryname="auto" className="auto" name="parcelCategory" value="auto"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Przeprowadzka</p>
                        <MyCheckbox categoryname="przeprowadzka" className="przeprowadzka" name="parcelCategory" value="przeprowadzka"/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p className={classes.categoryName}>Transport ponadgabarytowy</p>
                        <MyCheckbox categoryname="ponadgabarytowy" className="ponadgabarytowy" name="parcelCategory" value="ponadgabarytowy"/>
                    </Grid>
                    <ErrorMessage name="parcelCategory">
                    {msg => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                </Grid>
            </Paper>
           
                {
                formValues.parcelCategory.includes('paczka') || formValues.packages.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                    <Grid container >
                        <Grid xs={12} item>
                            <FieldArray 
                                name="packages"
                                render={arrayHelpers => (
                                    <div>
                                            {formValues.packages.map((packages, index) => (
                                                <div className="addNewpackages-wrapper" key={index}>
                                                    <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                         <Grid item>
                                                            <p className="p-label">sposób zapakowania*</p>
                                                            <PackageType
                                                                className="long-input"
                                                                variant="outlined"
                                                                name={`packages[${index}].packageType`}
                                                                data={kindOfPackage}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4} sm={1}>
                                                            <p className="p-label">waga*</p>
                                                            <UnitField type="number" variant="outlined" name={`packages[${index}].packageWeight`}  />
                                                        </Grid>
                                                        <p className="p-unit">kg</p>

                                                        <Grid item xs={4} sm={1}>
                                                            <p className="p-label">wysokość*</p>
                                                            <UnitField type="number" variant="outlined" name={`packages[${index}].packageHeight`} />
                                                        </Grid><p className="p-unit">cm</p>

                                                        <Grid item xs={4} sm={1}>
                                                            <p className="p-label">szerokość*</p>
                                                            <UnitField type="number" variant="outlined" name={`packages[${index}].packageWidth`} />
                                                        </Grid><p className="p-unit">cm</p>

                                                        <Grid item xs={4} sm={1}>
                                                            <p className="p-label">długość*</p>
                                                            <UnitField type="number" variant="outlined" name={`packages[${index}].packageLength`} />
                                                        </Grid><p className="p-unit">cm</p>

                                                        <Grid item xs={4} sm={1}>
                                                            <p className="p-label">ilość*</p>
                                                            <UnitField type="number" variant="outlined" name={`packages[${index}].packageAmount`} />  
                                                        </Grid><p className="p-unit">szt</p>
                                                       
                                                        
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
                                            {typeof errors.packages === 'string' ? <Typography color="error">{errors.packages}</Typography> : null}
                                        </Grid>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            className={classes.marginTopBtn}
                                            type="button" 
                                            onClick={() => arrayHelpers.push({packageWeight: '', packageHeight: '', packageWidth: '', packageLength: '', packageAmount: '', packageType: ''})}>
                                                Dodaj paczkę <AddOutlinedIcon style={{ color: 'white' }}/>
                                        </Button>
                                    </div>
                                )}
                            />   
                        </Grid>
                    </Grid> 
                </Paper>
                : null
                }

                {formValues.parcelCategory.includes('paleta') || formValues.pallet.length > 0 ? 
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
                                                                    name={`pallet[${index}].palletType`}
                                                                    data={palletType}
                                                                />
                                                            </Grid>
                                                           
                                                            <Grid item >
                                                                <p className="p-label">waga*</p>
                                                                <UnitField type="number" variant="outlined" name={`pallet[${index}].palletWeight`} />
                                                            </Grid><p className="p-unit">kg</p>
                                                            <Grid item >
                                                                <p className="p-label">wysokość*</p>
                                                                <UnitField type="number" variant="outlined" name={`pallet[${index}].palletHeight`} />
                                                            </Grid><p className="p-unit">cm</p>
                                                            <Grid item  >
                                                                <p className="p-label">szerokość*</p>
                                                                <UnitField type="number" variant="outlined" name={`pallet[${index}].palletWidth`} />
                                                            </Grid><p className="p-unit">cm</p>
                                                            <Grid item  >
                                                                <p className="p-label">długość*</p>
                                                                <UnitField type="number" variant="outlined" name={`pallet[${index}].palletLength`} />
                                                            </Grid><p className="p-unit">cm</p>
                                                            <Grid item >
                                                                <p className="p-label">ilość*</p>
                                                                <UnitField
                                                                    type="number"
                                                                    variant="outlined" 
                                                                    name={`pallet[${index}].palletAmount`} 
                                                                /> 
                                                            </Grid><p className="p-unit">szt</p>
                                                        
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
                                                    onClick={() => arrayHelpers.push({ palletType: '', palletWeight: '', palletHeight: '', palletWidth: '', palletLength: '', palletAmount: ''})}>
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
             
                {formValues.parcelCategory.includes('auto') || formValues.vehicles.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                           <Grid container>
                               <Grid xs={12} item>
                                   <FieldArray 
                                       name="vehicles"
                                       render={arrayHelpers => (
                                           <div>
                                                   {formValues.vehicles.map((vehicles, index) => (
                                                       <div className="addNewParcel-wrapper" key={index}>
                                                           <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                                <Grid item >
                                                                    <p className="p-label">rodzaj auta*</p>
                                                                    <PackageType
                                                                        className="long-input"
                                                                        variant="outlined"
                                                                        name={`vehicles[${index}].vehicleType`}
                                                                        data={carType}
                                                                    />
                                                                </Grid>
                                                               <Grid item>
                                                                   <p className="p-label">marka*</p>
                                                                   <UnitField className="long-input" variant="outlined" name={`vehicles[${index}].vehicleBrand`}/>
                                                               </Grid>
                                                               <Grid item>
                                                                   <p className="p-label">model*</p>
                                                                   <UnitField className="long-input" variant="outlined" name={`vehicles[${index}].vehicleModel`}/>
                                                               </Grid>
                                                               <Grid item>
                                                                    <p className="p-label">masa</p>
                                                                    <UnitField type="number" variant="outlined" name={`vehicles[${index}].vehicleWeight`} />
                                                                </Grid><p className="p-unit">kg</p>
                                                                <Grid item  >
                                                                    <p className="p-label">długość</p>
                                                                    <UnitField type="number" variant="outlined" name={`vehicles[${index}].vehicleLength`} />
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
                                                    {typeof errors.vehicles === 'string' ? <Typography color="error">{errors.vehicles}</Typography> : null}
                                                </Grid>

                                                   <Button 
                                                       variant="contained" 
                                                       color="primary" 
                                                       className={classes.marginTopBtn}
                                                       type="button" 
                                                       onClick={() => arrayHelpers.push({ vehicleType: '', vehicleBrand: '', vehicleModel: '', vehicleWeight: '', vehicleLength: ''})}>
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

                {formValues.parcelCategory.includes('przeprowadzka') || formValues.furnitures.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Grid container>                           
                               <Grid xs={12} item>
                                   <FieldArray 
                                       name="furnitures"
                                       render={arrayHelpers => (
                                           <div>
                                                {formValues.furnitures.map((furnitures, index) => (
                                                            <div className="addNewParcel-wrapper" key={index}>                                                        
                                                                <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                                    <Grid item>
                                                                        <p className="p-label">rodzaj mebla*</p>
                                                                        <UnitField className="long-input" variant="outlined" name={`furnitures[${index}].furnitureName`}/>
                                                                    </Grid>
                                                                    <Grid item >
                                                                        <p className="p-label">ilość*</p>
                                                                        <UnitField
                                                                            type="number"
                                                                            variant="outlined" 
                                                                            name={`furnitures[${index}].furnitureAmount`} 
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
                                                   <Grid item>
                                                        {typeof errors.furnitures === 'string' ? <Typography color="error">{errors.furnitures}</Typography> : null}
                                                    </Grid>
                                                
                                                   <Button 
                                                       variant="contained" 
                                                       color="primary" 
                                                       className={classes.marginTopBtn}
                                                       type="button" 
                                                       onClick={() => arrayHelpers.push({ furnitureName: '', furnitureAmount: ''})}
                                                    >
                                                           Dodaj mebel 
                                                           <AddOutlinedIcon style={{ color: 'white' }}/>
                                                   </Button>
                                           </div>
                                       )}
                                   />   
                               </Grid>
                        </Grid> 
                    </Paper>
                : null}

                {
                formValues.parcelCategory.includes('ponadgabarytowy') || formValues.cargo.length > 0 ?   
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Grid container>
                                <Grid xs={12} item>
                                   <FieldArray 
                                       name="cargo"
                                       render={arrayHelpers => (
                                           <div>
                                                {formValues.cargo.map((cargo, index) => (
                                                            <div className="oversizedParcel-wrapper" key={index}>                                                        
                                                                <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>    
                                                                    <Grid item xs={12} md={6}>
                                                                    <p className="p-label">Co chcesz przewieźć ?*</p>
                                                                        <UnitField 
                                                                            multiline 
                                                                            variant="outlined" 
                                                                            name={`cargo[${index}].cargoName`} 
                                                                            fullWidth
                                                                        />  
                                                                    </Grid>
                                                                    <Grid item sm={1}>
                                                                        <p className="p-label">ilość*</p>
                                                                        <UnitField
                                                                            type="number"
                                                                            variant="outlined" 
                                                                            name={`cargo[${index}].cargoAmount`} 
                                                                        />  
                                                                    </Grid><p className="p-unit">szt</p>
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
                                                    {typeof errors.cargo === 'string' ? <Typography color="error">{errors.cargo}</Typography> : null}
                                                </Grid>
                                                
                                                   <Button 
                                                       variant="contained" 
                                                       color="primary" 
                                                       className={classes.marginTopBtn}
                                                       type="button" 
                                                       onClick={() => arrayHelpers.push({ cargoName: '', cargoAmount: ''})}>
                                                           Dodaj przedmiot <AddOutlinedIcon style={{ color: 'white' }}
                                                       />
                                                   </Button>
                                           </div>
                                       )}
                                   />   
                               </Grid>
                
                            </Grid>
                    </Paper>
                : null
                }

                {formValues.packages.length > 0 || formValues.pallet.length > 0 || formValues.vehicles.length > 0 || formValues.furnitures.length > 0 || formValues.cargo.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Typography variant="h6" gutterBottom>
                            Twoja przesyłka
                        </Typography>
                        <OrderSummary/> 
                    </Paper>
                : null}

                {/* { userData.user ? null :  ( */}
                <Paper elevation={3} className={classes.CustomPaper}>
                    <Grid container spacing={2}>
                        <Grid className="email-grid-wrapper" container direction="row" item xs={12} sm={6}> 
                            <InputField name={email.name} label={email.label} fullWidth />
                        </Grid>
                    </Grid>
                </Paper>
               {/*  ) } */}
              
            </div> 
        </>
    )
}

function MyCheckbox(props) {
    const [field] = useField({
      name: props.name,
      type: 'checkbox',
      value: props.value
    });
    return (
      <FormControlLabel
        className="radioBtnParcelCategoryLabel"
        control={<Checkbox {...props} {...field} />}
        label={props.label}
      />
    );
}