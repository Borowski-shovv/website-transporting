/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';
import { mixed } from 'yup';
import moment from 'moment';
import sendParcelModel from './sendParcelModel';
const { formField: {
    email,
    firstName,
    firstName2,
    contactPerson,
    contactPerson2,
    address1,
    address2,
    city,
    city2,
    zipcode,
    zipcode2,
    country,
    country2,
    contactNumber,
    contactNumber2,
    // parcelCategory
  }, 


} = sendParcelModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;


export default [
  Yup.object().shape({
    [email.name]: Yup.string().email().required("Wypisz swój adres email."),
    parcelCategory: Yup.string().required("Wybierz kategorie przesyłki."),
    parcel: Yup 
      .mixed()
      .when("parcelCategory", {
       
      is: (parcelCategory => parcelCategory === 'paczka'),
      then:  Yup.array().of(
        Yup.object().shape({
          name: Yup.string().min(2, 'Nazwa jest za krótka.').required('Napisz co przewozisz.'),
          weight: Yup.number().required('Waga paczki jest wymagana.'),
          height: Yup.number().required('Wysokość paczki jest wymagana.'),
          width: Yup.number().required('Szerokość paczki jest wymagana.'),
          length: Yup.number().required('Długość paczki jest wymagana.'),
          amount: Yup.number().required('Wpisz ilość paczek.'),
          kindOfpackage: Yup.string().required('Wybierz typ opakowania.')
        })
      )
     }),
     pallet: Yup 
      .mixed()
      .when("parcelCategory", {   
      is: (parcelCategory => parcelCategory === 'paleta'),
      then:  Yup.array().of(
        Yup.object().shape({
          name: Yup.string().min(2, 'Nazwa jest za krótka').required('Rodzaj palety jest wymagany'),
          weight: Yup.number().required('Waga palety jest wymagana'),
          height: Yup.number().required('Wysokość palety jest wymagana.'),
          width: Yup.number().required('Szerokość palety jest wymagana.'),
          length: Yup.number().required('Długość palety jest wymagana.'),
          amount: Yup.number().required('Wpisz ilość palet.'),
        })
        ),
     })
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [firstName2.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [contactPerson.name]: Yup.string().required(`${contactPerson.requiredErrorMsg}`),
    [contactPerson2.name]: Yup.string().required(`${contactPerson2.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [address2.name]: Yup.string().required(`${address2.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [city2.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`),
              // .test(
              //   'len',
              //   `${zipcode.invalidErrorMsg}`,
              //    val => val && val.length === 6
              // ),
    [zipcode2.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`),
              // .test(
              //   'len',
              //   `${zipcode.invalidErrorMsg}`,
              //    val => val && val.length === 6
              // ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
    [country2.name]: Yup.string()
      .nullable()
      .required(`${country2.requiredErrorMsg}`),
    [contactNumber.name]: Yup.string().required(`${contactNumber.requiredErrorMsg}`),
    [contactNumber2.name]: Yup.string().required(`${contactNumber2.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    // [contactNumber.name]: Yup.string().required(`${contactNumber.requiredErrorMsg}`),
    // [contactNumber2.name]: Yup.string().required(`${contactNumber2.requiredErrorMsg}`),
    // [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    // [cardNumber.name]: Yup.string()
    //   .required(`${cardNumber.requiredErrorMsg}`)
    //   .matches(visaRegEx, cardNumber.invalidErrorMsg),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    // [cvv.name]: Yup.string()
    //   .required(`${cvv.requiredErrorMsg}`)
    //   .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  }),

];


