/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';
import moment from 'moment';
import sendParcelModel from './sendParcelModel';
const {
  formField: {
    email,
    firstName,
    firstName2,
    lastName,
    lastName2,
    address1,
    address2,
    city,
    city2,
    zipcode,
    zipcode2,
    country,
    country2,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = sendParcelModel;


const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [email.name]: Yup.string().email().required("Wypisz swój adres email"),
    parcelCategory: Yup.string().required("Wybierz kategorie przesyłki"),
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [firstName2.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [lastName2.name]: Yup.string().required(`${lastName2.requiredErrorMsg}`),
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
      .required(`${country2.requiredErrorMsg}`)
  }),
  Yup.object().shape({
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


