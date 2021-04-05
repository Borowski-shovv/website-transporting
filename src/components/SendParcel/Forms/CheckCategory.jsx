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
import boxImg from '../../../assets/images/formImages/box.svg';
import palletImg from '../../../assets/images/formImages/wholesale.svg';
import truckImg from '../../../assets/images/formImages/truck.svg';
import couchImg from '../../../assets/images/formImages/couch.svg';
import trailerImg from '../../../assets/images/formImages/trailer.svg';
import classNames from 'classnames';
import { useField, ErrorMessage } from 'formik';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    clientChoice: {
       textAlign: 'center',
       marginTop: '50px',
    },
    categoryName: {
        textAlign: 'center',
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
    },
    imgWidth: {
        width: 40,
    },
    // TextAlignTitle: {
    //     textAlign: 'center',
    // },
    
  }))

const kindOfPackage = [
    {
      value: "1",
      label: 'karton lub koperta'
    },
    {
      value: "2",
      label: 'folia stretch'
    },
    {
        value: "3",
        label: 'folia bąbelkowa'
    },
    {
        value: "4",
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
        value: "1",
        label: 'europaleta'
    },
    {
        value: "2",
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
                Typ zamówienia
            </Typography>
          
            <Paper elevation={3} className={classes.CustomPaper}>
                <Typography variant="body2" gutterBottom>
                    Wybierz kategorie przesyłki (możesz wybrać więcej niż jedną opcję)
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
                    <Grid container>
                        <Grid item container xs={12} justify="center">
                            <img className={classes.imgWidth} src={boxImg} alt='icon'/>
                        </Grid>
                        <Grid xs={12} item>
                            <FieldArray 
                                name="packages"
                                render={arrayHelpers => (
                                        <div>
                                            {formValues.packages.map((packages, index) => (
                                                <div className="addNewParcel-wrapper" key={index}>
                                                    <Grid style={{backgroundColor: '#f7f7f7'}} container alignItems="center" spacing={3}>
                                                        <Grid item xs={12} sm={3}>
                                                            <PackageType
                                                                label="sposób zapakowania*"
                                                                fullWidth
                                                                name={`packages[${index}].packageType`}
                                                                data={kindOfPackage}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2} container alignItems="center">
                                                            <UnitField fullWidth label="waga (kg)*" type="number" name={`packages[${index}].packageWeight`}  />
                                                          
                                                        </Grid>

                                                        <Grid item xs={12} sm={2} container alignItems="center">
                                                            <UnitField fullWidth type="number" label="wysokość (cm)*" name={`packages[${index}].packageHeight`} />
                                                          
                                                        </Grid>

                                                        <Grid item xs={12} sm={2} container alignItems="center">
                                                            <UnitField fullWidth type="number" label="szerokość (cm)*" name={`packages[${index}].packageWidth`} />
                                                           
                                                        </Grid>

                                                        <Grid item xs={12} sm={2} container alignItems="center">
                                                            <UnitField fullWidth type="number" label="długość (cm)*" name={`packages[${index}].packageLength`} />
                                                           
                                                        </Grid>

                                                        <Grid item xs={12} sm={2} container alignItems="center">
                                                            <UnitField fullWidth type="number" label="ilość (szt)*" name={`packages[${index}].packageAmount`} />  
                                                           
                                                        </Grid>
                                                       
                                                        <Button
                                                            className={classes.deleteItem}
                                                            type="button"
                                                            onClick={() => arrayHelpers.remove(index)}
                                                            size="small"
                                                            color="primary"
                                                          
                                                        >
                                                            Usuń
                                                            {/* <RemoveCircleIcon color="primary"/>    */}
                                                        </Button>
                                                    </Grid>
                                                </div>
                                            ))}

                                        <Grid item>
                                            {typeof errors.packages === 'string' ? <Typography color="error">{errors.packages}</Typography> : null}
                                        </Grid>
                                        <Button 
                                            variant="contained" 
                                            size="small"
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

                {formValues.parcelCategory.includes('paleta') || formValues.pallets.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Grid container item xs={12} justify="center">
                            <Grid item>
                                <img className={classes.imgWidth} src={palletImg} alt='icon'/>
                            </Grid>
                            <Grid xs={12} item>
                                <FieldArray 
                                    name="pallets"
                                    render={arrayHelpers => (
                                        <div>
                                            {formValues.pallets.map((pallets, index) => (
                                                <div className="addNewParcel-wrapper" key={index}>
                                                        <Grid style={{backgroundColor: '#f7f7f7'}} container alignItems="center" spacing={3}>
                                                            <Grid item xs={12} sm={3}>
                                                                <PackageType
                                                                    fullWidth
                                                                    label="rodzaj palety"
                                                                    name={`pallets[${index}].palletType`}
                                                                    data={palletType}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={2} container alignItems="center">
                                                                <UnitField fullWidth type="number" label="waga (kg)*" name={`pallets[${index}].palletWeight`} />
                                                               
                                                            </Grid>
                                                            <Grid item xs={12} sm={2} container alignItems="center">
                                                                <UnitField fullWidth type="number" label="wysokość (cm)*" name={`pallets[${index}].palletHeight`} />
                                                               
                                                            </Grid>
                                                            <Grid item  xs={12} sm={2} container alignItems="center">
                                                                <UnitField fullWidth type="number" label="szerokość (cm)*" name={`pallets[${index}].palletWidth`} />
                                                               
                                                            </Grid>
                                                            <Grid item xs={12} sm={2} container alignItems="center" >
                                                                <UnitField fullWidth type="number" label="długość (cm)*" name={`pallets[${index}].palletLength`} />
                                                            </Grid>
                                                            <Grid item xs={12} sm={2} container alignItems="center" >
                                                                <UnitField
                                                                fullWidth
                                                                    type="number"
                                                                    label="ilość (szt)*" 
                                                                    name={`pallets[${index}].palletAmount`} 
                                                                /> 
                                                                
                                                            </Grid>
                                                        
                                                            <Button
                                                                className={classes.deleteItem}
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                                size="small"
                                                                color="primary"  
                                                            >
                                                                Usuń
                                                                {/* <RemoveCircleIcon color="primary"/>    */}
                                                            </Button>
                                                        </Grid>
                                                    </div>
                                                ))}

                                                <Grid item>
                                                    {typeof errors.pallets === 'string' ? <Typography color="error">{errors.pallets}</Typography> : null}
                                                </Grid>

                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    size="small"
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
                           <Grid container xs={12} justify="center">
                                <Grid item >
                                    <img className={classes.imgWidth} src={truckImg} alt='icon'/>
                                </Grid>
                               <Grid xs={12} item>
                                   <FieldArray 
                                       name="vehicles"
                                       render={arrayHelpers => (
                                           <div>
                                                   {formValues.vehicles.map((vehicles, index) => (
                                                       <div className="addNewParcel-wrapper" key={index}>
                                                           <Grid style={{backgroundColor: '#f7f7f7'}} container alignItems="center" spacing={3}>
                                                                <Grid item xs={12} sm={2}>
                                                                    <PackageType
                                                                        className="long-input"
                                                                        fullWidth
                                                                        label="rodzaj auta*"
                                                                        name={`vehicles[${index}].vehicleType`}
                                                                        data={carType}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={3}>
                                                                    <UnitField fullWidth xs={12} sm={2} label="marka*" name={`vehicles[${index}].vehicleBrand`}/>
                                                                </Grid>
                                                                <Grid item xs={12} sm={3}>
                                                                    <UnitField fullWidth xs={12} sm={2} label="model*" name={`vehicles[${index}].vehicleModel`}/>
                                                                </Grid>
                                                                <Grid item xs={12} sm={2} >
                                                                    <UnitField fullWidth type="number" label="masa (kg)" name={`vehicles[${index}].vehicleWeight`} />
                                                                </Grid>
                                                                <Grid item xs={12} sm={2}>
                                                                    <UnitField fullWidth type="number" label="długość (m)" name={`vehicles[${index}].vehicleLength`} />
                                                                </Grid>
                                                                <Button
                                                                    className={classes.deleteItem}
                                                                    type="button"
                                                                    onClick={() => arrayHelpers.remove(index)}
                                                                    size="small"
                                                                    color="primary"  
                                                                >
                                                                Usuń
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
                                                       size="small"
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
                        <Grid container xs={12} justify="center">  
                                <Grid item >
                                    <img className={classes.imgWidth} src={couchImg} alt='icon'/>
                                </Grid>                          
                               <Grid xs={12} item>
                                   <FieldArray 
                                       name="furnitures"
                                       render={arrayHelpers => (
                                           <div>
                                                {formValues.furnitures.map((furnitures, index) => (
                                                            <div className="addNewParcel-wrapper" key={index}>                                                        
                                                                <Grid style={{backgroundColor: '#f7f7f7'}} container spacing={3}>
                                                                    <Grid item xs={12} sm={3} container alignItems="center">
                                                                        <UnitField fullWidth label="rodzaj mebla*" name={`furnitures[${index}].furnitureName`}/>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={2} container alignItems="center">
                                                                        
                                                                        <UnitField
                                                                            fullWidth
                                                                            type="number"
                                                                            label="ilość*"
                                                                            name={`furnitures[${index}].furnitureAmount`} 
                                                                        />    
                                                                    </Grid>
                                                                    <Button
                                                                        className={classes.deleteItem}
                                                                        type="button"
                                                                        onClick={() => arrayHelpers.remove(index)}
                                                                        size="small"
                                                                        color="primary"  
                                                                    >
                                                                        Usuń 
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
                                                       size="small"
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
                        <Grid container xs={12} justify="center">
                                <Grid item >
                                    <img className={classes.imgWidth} src={trailerImg} alt='icon'/>
                                </Grid>
                                <Grid xs={12} item>
                                   <FieldArray 
                                       name="cargo"
                                       render={arrayHelpers => (
                                           <div>
                                                {formValues.cargo.map((cargo, index) => (
                                                            <div className="addNewParcel-wrapper" key={index}>                                                        
                                                                <Grid style={{backgroundColor: '#f7f7f7'}} container alignItems="center" spacing={3}>    
                                                                    <Grid xs={12} sm={3} container alignItems="center" item>
                                                                    
                                                                        <UnitField 
                                                                        
                                                                            label="co chcesz przewieźć ?*"
                                                                            
                                                                            name={`cargo[${index}].cargoName`} 
                                                                            fullWidth
                                                                        />  
                                                                    </Grid>
                                                                    <Grid xs={12} sm={2} container alignItems="center" item>
                                                                        <UnitField
                                                                            fullWidth
                                                                            label="ilość*"
                                                                            type="number"
                                                                            name={`cargo[${index}].cargoAmount`} 
                                                                        />  
                                                                    </Grid>
                                                                    <Button
                                                                        className={classes.deleteItem}
                                                                        type="button"
                                                                        onClick={() => arrayHelpers.remove(index)}
                                                                        size="small"
                                                                        color="primary"  
                                                                    >
                                                                        Usuń 
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
                                                       size="small"
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

                {formValues.packages.length > 0 || formValues.pallets.length > 0 || formValues.vehicles.length > 0 || formValues.furnitures.length > 0 || formValues.cargo.length > 0 ? 
                    <Paper elevation={3} className={classes.CustomPaper}>
                        <Typography variant="h6" textAlign="center" gutterBottom className={classes.TextAlignTitle}>
                            Twoje zamówienie
                        </Typography>
                        <OrderSummary/> 
                    </Paper>
                : null}

                {/* { userData.user ? null :  ( */}
                <Paper elevation={3} className={classes.CustomPaper}>
                    <Grid container spacing={2}>
                        <Grid className="email-grid-wrapper" container direction="row" item xs={12} sm={5}> 
                            <InputField name={email.name} label={email.label} fullWidth />
                        </Grid>
                    </Grid>
                </Paper>
            
              
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