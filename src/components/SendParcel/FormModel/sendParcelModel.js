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
        label: 'Imię i nazwisko lub nazwa firmy*',
        requiredErrorMsg: 'Imię jest wymagane.'
      },
      firstName2: {
        name: 'firstName2',
        label: 'Imię i nazwisko lub nazwa firmy*',
        requiredErrorMsg: 'Imię jest wymagane.'
      },
      contactPerson: {
        name: 'contactPerson',
        label: 'Osoba kontaktowa*',
        requiredErrorMsg: 'Osoba kontaktowa jest wymagana.'
      },
      contactPerson2: {
        name: 'contactPerson2',
        label: 'Osoba kontaktowa*',
        requiredErrorMsg: 'Osoba kontaktowa jest wymagana.'
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
      contactNumber: {
        name: 'contactNumber',
        label: 'Numer kontaktowy nadawcy paczki*',
        requiredErrorMsg: 'Numer kontaktowy nadawcy jest wymagany'
      },
      contactNumber2: {
        name: 'contactNumber2',
        label: 'Numer kontaktowy odbiorcy paczki*',
        requiredErrorMsg: 'Numer kontaktowy odbiorcy jest wymagany'
      },
      parcelCategory: {
        name: 'parcelCategory',
        requiredErrorMsg: 'Wybierz kategorie paczki'
      },
    },
    files: [],
    parcel: [],
  };
  