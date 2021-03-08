/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';
// import { mixed } from 'yup';
// import moment from 'moment';
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
    // parcelCategory: Yup.array(Yup.string().oneOf(['paczka', 'paleta', 'auto', 'przeprowadzka', 'ponadgabarytowy'])).min(1, "Wybierz kategorie przesyłki."),
    parcel: Yup 
      .mixed()
      .when("parcelCategory", {
      is: (parcelCategory => parcelCategory === 'paczka'),
      // is: (parcelCategory => parcelCategory.find(c => c === 'paczka')),
      then:  Yup.array().of(
        Yup.object().shape({
          name: Yup.string().min(2, 'Nazwa jest za krótka.').required('Napisz co przewozisz.'),
          weight: Yup.number().min(1).required('Waga paczki jest wymagana.'),
          height: Yup.number().min(1).required('Wysokość paczki jest wymagana.'),
          width: Yup.number().min(1).required('Szerokość paczki jest wymagana.'),
          length: Yup.number().min(1).required('Długość paczki jest wymagana.'),
          amount: Yup.number().min(1).required('Wpisz ilość paczek.'),
          kindOfpackage: Yup.string().required('Wybierz typ opakowania.')
        })
      )
      .min(1, 'Dodaj paczkę i uzupełnij dane dotyczące Twojej paczki')
    }),
    pallet: Yup 
      .mixed()
      .when("parcelCategory", {   
      is: (parcelCategory => parcelCategory === 'paleta'),
      then: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().min(2, 'Nazwa jest za krótka').required('Rodzaj palety jest wymagany'),
          weight: Yup.number().required('Waga palety jest wymagana'),
          height: Yup.number().required('Wysokość palety jest wymagana.'),
          width: Yup.number().required('Szerokość palety jest wymagana.'),
          length: Yup.number().required('Długość palety jest wymagana.'),
          amount: Yup.number().required('Wpisz ilość palet.'),
        })
      )
      .min(1, 'Dodaj paletę i uzupełnij specyfikacje palety')
    }),
    car: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory === 'auto'),
        then: Yup.array().of(
          Yup.object().shape({
            type: Yup.string().required(),
            brand: Yup.string().required(),
            model: Yup.string().required(),
            weight: Yup.string().required(),
            length: Yup.string().required()
          })
        )
        .min(1, 'Dodaj auto i uzupełnij szczegóły o aucie')
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
    files: Yup.array(
        Yup.object({
          url: Yup.string().required()
    }))
  }),

];


