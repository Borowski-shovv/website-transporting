import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';

import AddressForm from './Forms/AddressForm';
import DatesForm from './Forms/DatesDetailsForm';
import CheckCategory from './Forms/CheckCategory';
import ReviewOrder from './ReviewOrder';
import ContactDetailsForm from './Forms/ContactDetailsForm';
import CheckoutSuccess from './CheckoutSuccess';
import validationSchema from './FormModel/validationSchema';
import sendParcelModel from './FormModel/sendParcelModel';
import formInitialValues from './FormModel/formInitialValues';

import { Formik, Form } from 'formik';
import { useFormikContext } from 'formik';

import useStyles from './styles';
import './SendParcel.css';

const steps = ['Kategoria przesyłki', 'Dane adresowe', 'Dane kontaktowe i terminy', 'Informacje dotyczące płatności', 'Podsumowanie zamówienia'];
const { formId, formField, formParcelCategory } = sendParcelModel;


function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <CheckCategory formParcelCategory={formParcelCategory} formField={formField} />;
    case 1:
      return <AddressForm formField={formField} />;
    case 2:
      return <ContactDetailsForm formField={formField}/>;
    case 3:
      return <DatesForm formField={formField} />;
    case 4:
      return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

const SendParcel = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;


  async function _submitForm(values, actions) {
    // await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
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
    <Typography component="h1" variant="h4" align="center">
      Nadaj przesyłkę
    </Typography>
    <Stepper activeStep={activeStep} className={classes.stepper}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    <React.Fragment>
      {activeStep === steps.length ? (
        <CheckoutSuccess />
        ) : (
          <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
          >
     
          {({ isSubmitting }) => (
            <Form id={formId}>
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
                    {isLastStep ? 'Nadaj przesyłkę' : 'Dalej'}
                  </Button>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </React.Fragment>
  </React.Fragment>
  )
}

 
export default SendParcel;