/* eslint-disable import/no-anonymous-default-export */

export default {
    formId: 'sendOrder',
    formField: {
      email: {
        name: 'userEmail',
        label: 'Email*',
        requiredErrorMsg: 'Wpisz swój adres email.',
      },
      firstName: {
        name: 'firstName',
        label: 'Imię*',
        requiredErrorMsg: 'Imię jest wymagane.'
      },
      firstName2: {
        name: 'firstName2',
        label: 'Imię*',
        requiredErrorMsg: 'Imię jest wymagane.'
      },
      lastName: {
        name: 'lastName',
        label: 'Nazwisko*',
        requiredErrorMsg: 'Nazwisko jest wymagane.'
      },
      lastName2: {
        name: 'lastName2',
        label: 'Nazwisko*',
        requiredErrorMsg: 'Nazwisko jest wymagane.'
      },
      address1: {
        name: 'address1',
        label: 'Adres odbioru Twojej przesyłki*',
        requiredErrorMsg: 'Adres odbioru Twojej przesyłki jest wymagany.'
      },
      address2: {
        name: 'address2',
        label: 'Adres dostawy Twojej przesyłki*',
        requiredErrorMsg: 'Adres dostawy Twojej przesyłki jest wymagany.'
      },
      city: {
        name: 'city',
        label: 'Miasto*',
        requiredErrorMsg: 'Miasto odbioru Twojej przesyłki jest wymagane.'
      },
      city2: {
        name: 'city2',
        label: 'Miasto*',
        requiredErrorMsg: 'Miasto odbioru Twojej przesyłki jest wymagane.'
      },
      state: {
        name: '',
        label: 'State/Province/Region'
      },
      zipcode: {
        name: 'zipcode',
        label: 'Kod pocztowy*',
        requiredErrorMsg: 'Kod pocztowy jest wymagany',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      zipcode2: {
        name: 'zipcode2',
        label: 'Kod pocztowy*',
        requiredErrorMsg: 'Kod pocztowy jest wymagany',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      country: {
        name: 'country',
        label: 'Państwo*',
        requiredErrorMsg: 'Wybierz państwo z którego będzie odbierana Twoja przesyłka'
      },
      country2: {
        name: 'country2',
        label: 'Państwo*',
        requiredErrorMsg: 'Wybierz państwo z którego będzie odbierana Twoja przesyłka'
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
    formParcelCategory: {
      category1: {
        name: 'Paczka',
      },
      category2: {
        name: 'Paleta',
      },
      category3: {
        name: 'Transport auta',
      },
      category4: {
        name: 'Przeprowadzka',
      },
      category5: {
        name: 'Transport Ponadgabarytowy',
      },
    }
  };
  