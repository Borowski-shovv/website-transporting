/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';
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
    // parcelCategory: Yup.string().required("Wybierz kategorie przesyłki."),
    parcelCategory: Yup.array(Yup.string().oneOf(['paczka', 'paleta', 'auto', 'przeprowadzka', 'ponadgabarytowy'])).min(1, "Wybierz kategorie przesyłki.").required(),
    parcel: Yup 
    .mixed()
    .when("parcelCategory", { 
      is: (parcelCategory => parcelCategory.find(p => p === 'paczka') ),
      then:  Yup.array().of(
        Yup.object().shape({
          weight: Yup.number().min(1).required('Waga paczki jest wymagana.'),
          height: Yup.number().min(1).required('Wysokość paczki jest wymagana.'),
          width: Yup.number().min(1).required('Szerokość paczki jest wymagana.'),
          length: Yup.number().min(1).required('Długość paczki jest wymagana.'),
          amount: Yup.number().min(1).required('Wpisz ilość paczek.'),
          kindOfpackage: Yup.string().required('Wybierz typ opakowania.')
        }),
        )
      .min(1, 'Dodaj paczkę i uzupełnij dane').required()
    }),
    pallet: Yup 
      .mixed()
      .when("parcelCategory", {   
        is: (parcelCategory => parcelCategory.find(p => p === 'paleta')),
        then: Yup.array().of(
          Yup.object().shape({
            type: Yup.string().min(1).required(),
            weight: Yup.number().required('Waga palety jest wymagana'),
            height: Yup.number().required('Wysokość palety jest wymagana.'),
            width: Yup.number().required('Szerokość palety jest wymagana.'),
            length: Yup.number().required('Długość palety jest wymagana.'),
            amount: Yup.number().required('Wpisz ilość palet.'),
          })
      )
      .min(1, 'Dodaj paletę i uzupełnij dane')
    }),
    car: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory.find(c => c === 'auto')),
        then: Yup.array().of(
          Yup.object().shape({
            type: Yup.string().required(),
            brand: Yup.string().required().min(2).max(20),
            model: Yup.string().required().min(2).max(20),
            weight: Yup.number(),
            length: Yup.number()
          })
        )
        .min(1, 'Dodaj auto, które chcesz przewieźć')
      }), 
    removal: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory.find(f => f === 'przeprowadzka')),
        then: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required(),
            amount: Yup.string().required(),
          })
        )
        .min(1, 'Dodaj mebel, który chcesz przewieźć')
      }), 
    oversized: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory.find(i => i === 'ponadgabarytowy')),
        then: Yup.array().of(
          Yup.object().shape({
            comment: Yup.string().required(),
            amount: Yup.number().required()
          })
        )
        .min(1, 'Dodaj przedmiot, który chcesz przewieźć')
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
    servicesType: Yup.string().nullable().required('Wybierz typ usługi'),
  }),
   Yup.object().shape({
      rules: Yup.bool().oneOf([true], 'To pole jest wymagane'),
  }),
];
