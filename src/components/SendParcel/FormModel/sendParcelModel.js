/* eslint-disable import/no-anonymous-default-export */

export default {
    formId: 'sendOrder',
    formField: {
      email: {
        name: 'email',
        label: 'Email*',
        requiredErrorMsg: 'Wpisz swój adres email.',
      },
      senderName: {
        name: 'senderName',
        label: 'Imię i nazwisko lub nazwa firmy*',
        requiredErrorMsg: 'Imię jest wymagane.'
      },
      recipientName: {
        name: 'recipientName',
        label: 'Imię i nazwisko lub nazwa firmy*',
        requiredErrorMsg: 'Imię jest wymagane.'
      },
      senderContact: {
        name: 'senderContact',
        label: 'Osoba kontaktowa*',
        requiredErrorMsg: 'Osoba kontaktowa jest wymagana.'
      },
      recipientContact: {
        name: 'recipientContact',
        label: 'Osoba kontaktowa*',
        requiredErrorMsg: 'Osoba kontaktowa jest wymagana.'
      },
      senderAddress: {
        name: 'senderAddress',
        label: 'Adres odbioru Twojej przesyłki*',
        requiredErrorMsg: 'Adres odbioru Twojej przesyłki jest wymagany.'
      },
      recipientAddress: {
        name: 'recipientAddress',
        label: 'Adres dostawy Twojej przesyłki*',
        requiredErrorMsg: 'Adres dostawy Twojej przesyłki jest wymagany.'
      },
      senderCity: {
        name: 'senderCity',
        label: 'Miasto*',
        requiredErrorMsg: 'Miasto odbioru Twojej przesyłki jest wymagane.'
      },
      recipientCity: {
        name: 'recipientCity',
        label: 'Miasto*',
        requiredErrorMsg: 'Miasto odbioru Twojej przesyłki jest wymagane.'
      },
      senderZip: {
        name: 'senderZip',
        label: 'Kod pocztowy*',
        requiredErrorMsg: 'Kod pocztowy jest wymagany',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      recipientZip: {
        name: 'recipientZip',
        label: 'Kod pocztowy*',
        requiredErrorMsg: 'Kod pocztowy jest wymagany',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      senderCountry: {
        name: 'senderCountry',
        label: 'Państwo*',
        requiredErrorMsg: 'Wybierz państwo nadania Twojej przesyłki'
      },
      recipientCountry: {
        name: 'recipientCountry',
        label: 'Państwo*',
        requiredErrorMsg: 'Wybierz państwo odbioru Twojej przesyłki'
      },
      senderPhone: {
        name: 'senderPhone',
        label: 'Numer kontaktowy nadawcy*',
        requiredErrorMsg: 'Numer kontaktowy nadawcy jest wymagany'
      },
      recipientPhone: {
        name: 'recipientPhone',
        label: 'Numer kontaktowy odbiorcy*',
        requiredErrorMsg: 'Numer kontaktowy odbiorcy jest wymagany'
      },
    },
    // files: [],
    packages: [],
  };
  