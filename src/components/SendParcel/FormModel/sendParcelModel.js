import icon1 from '../../../assets/images/formImages/box.svg';
import icon4 from '../../../assets/images/formImages/couch.svg';
import icon5 from '../../../assets/images/formImages/trailer.svg';
import icon3 from '../../../assets/images/formImages/truck.svg';
import icon2 from '../../../assets/images/formImages/wholesale.svg';


export default {
    formId: 'checkoutForm',
    formField: {
      firstName: {
        name: 'firstName',
        label: 'First name*',
        requiredErrorMsg: 'First name is required'
      },
      lastName: {
        name: 'lastName',
        label: 'Last name*',
        requiredErrorMsg: 'Last name is required'
      },
      address1: {
        name: 'address1',
        label: 'Address Line 1*',
        requiredErrorMsg: 'Address Line 1 is required'
      },
      address2: {
        name: 'address2',
        label: 'Address Line 2'
      },
      city: {
        name: 'city',
        label: 'City*',
        requiredErrorMsg: 'City is required'
      },
      state: {
        name: 'state',
        label: 'State/Province/Region'
      },
      zipcode: {
        name: 'zipcode',
        label: 'Zipcode*',
        requiredErrorMsg: 'Zipcode is required',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      country: {
        name: 'country',
        label: 'Country*',
        requiredErrorMsg: 'Country is required'
      },
      useAddressForPaymentDetails: {
        name: 'useAddressForPaymentDetails',
        label: 'Use this address for payment details'
      },
      nameOnCard: {
        name: 'nameOnCard',
        label: 'Name on card*',
        requiredErrorMsg: 'Name on card is required'
      },
      cardNumber: {
        name: 'cardNumber',
        label: 'Card number*',
        requiredErrorMsg: 'Card number is required',
        invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
      },
      expiryDate: {
        name: 'expiryDate',
        label: 'Expiry date*',
        requiredErrorMsg: 'Expiry date is required',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      cvv: {
        name: 'cvv',
        label: 'CVV*',
        requiredErrorMsg: 'CVV is required',
        invalidErrorMsg: 'CVV is invalid (e.g. 357)'
      }
    },
    formCategoryImages: {
      category1: {
        image: icon1,
        name: 'Paczka',
      },
      category2: {
        image: icon2,
        name: 'Paleta',
      },
      category3: {
        image: icon3,
        name: 'Transport auta',
      },
      category4: {
        image: icon4,
        name: 'Przeprowadzka',
      },
      category5: {
        image: icon5,
        name: 'Transport Ponadgabarytowy',
      },
    }
  };
  