import React, { useState, useContext } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Paper
} from '@material-ui/core';
import Axios from 'axios';
import AddressForm from './Forms/AddressForm';
import CheckCategory from './Forms/CheckCategory';
import ReviewOrder from './ReviewOrder';
import ContactDetailsForm from './Forms/ContactDetailsForm';
import CheckoutSuccess from './CheckoutSuccess';
import validationSchema from './FormModel/validationSchema';
import sendParcelModel from './FormModel/sendParcelModel';
import formInitialValues from './FormModel/formInitialValues';
import { Formik, Form } from 'formik';
import useStyles from './styles';
import './SendParcel.css';
import appContext from '../../context/userContext';

const steps = ['Kategoria przesyłki', 'Dane adresowe', 'Preferowane terminy', 'Podsumowanie'];


const { formId, formField, files} = sendParcelModel;


function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <CheckCategory formField={formField} />;
    case 1:
      return <AddressForm formField={formField} />;
    case 2:
      return <ContactDetailsForm files={files} formField={formField}/>;
    case 3:
      return <ReviewOrder />;
    default:
      return <div>Nie znaleziono</div>;
  }
}



const SendParcel = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const { userData ,formikImages, setFormikImages, setOrderId} = useContext(appContext);

  async function _submitForm(values, actions) {

    setActiveStep(activeStep + 1);
    // console.log(values.packages)
    let url = 'https://transport-szwecja.com/api/order/create';

    try {
      const orderValues = {
        "email": values.email,
        "senderName": values.senderName,
        "senderAddress": values.senderAddress,
        "senderZip": values.senderZip,
        "senderCity": values.senderCity,
        "senderCountry": values.senderCountry,
        "senderPhone":  values.senderPhone,
        "senderContact": values.senderContact,
        "recipientName": values.recipientName,
        "recipientAddress": values.recipientAddress,
        "recipientZip": values.recipientZip,
        "recipientCity": values.recipientCity,
        "recipientCountry": values.recipientCountry,
        "recipientPhone": values.recipientPhone,
        "recipientContact": values.recipientContact,
        "serviceType": values.servicesType,
        "shipmentDate": values.shipmentDate,
        "pickupDate": values.pickupDate,
        "comment": values.comment,
        "files": formikImages,
        "packages": values.packages,
        "pallets": values.pallets,
        "vehicles": values.vehicles,
        "furnitures": values.furnitures,
        "cargo": values.cargo,  
      }
      console.log('wartosci wrzucane do posta przed wyslaniem',orderValues)
      const orderRes = await Axios.post(url, orderValues, {
        auth: {
          username: 'shovv', 
          password: '$HOVV2020'
        },
      })
      setOrderId(orderRes.data.order_id)
      localStorage.setItem("order_id", orderRes.data.order_id)

      console.log('odpowiedz z servera po wyslaniu formularza z przesylka',orderRes)
      console.log(orderRes.data.order_id);

      setFormikImages([]);

    } catch(err) {
      console.log(err)
    }

  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return(
    <React.Fragment>
    <Typography component="h1" variant="h4" align="center" className={classes.titleForm}>
      Złóż zamówienie
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.infoParagraph}>
      Po wypełnieniu formularza nasz konsultant skontaktuje się z Tobą w celu ustalenia szczegółów transportu oraz przedstawienia wyceny.
    </Typography>
    <Paper elevation={3}>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
    <React.Fragment>
      {activeStep === steps.length ? (
        <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={
              formInitialValues
            }
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
     
          {({ isSubmitting, values, touched, errors, setFieldValue  }) => (
            <Form id={formId} autoComplete="off">
            
                {_renderStepContent(activeStep)}

              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={_handleBack} className={classes.button}>
                    Wróć
                  </Button>
                )}
                <div className={classes.wrapper}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    {isLastStep ? 'Wyceń Przesyłkę' : 'Dalej'}
                  </Button>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>

              {/* <pre>{JSON.stringify({values, errors}, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      )}
    </React.Fragment>
  </React.Fragment>
  )
}

 
export default SendParcel;