import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Paper
} from '@material-ui/core';

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


  async function _submitForm(values, actions) {

    setActiveStep(activeStep + 1);

    return new Promise((res) => setTimeout(() => {
      res();
      console.log('odpowiedz po wyslaniu')
      console.log('dane z formularza', values)
    }, 2000))
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
      Wyceń przesyłkę
    </Typography>
    <Paper >
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
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
          >
     
          {({ isSubmitting, values, errors }) => (
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