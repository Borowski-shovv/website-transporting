/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';
import sendParcelModel from './sendParcelModel';
const { formField: {
    email,
    senderName,
    senderAddress,
    senderZip,
    senderCity,
    senderCountry,
    senderPhone,
    senderContact,
    recipientName,
    recipientAddress,
    recipientZip,
    recipientCity,
    recipientCountry,
    recipientContact,
    recipientPhone
  }, 
} = sendParcelModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [email.name]: Yup.string().email("Wpisz prawidłowy adres email").required("Wypisz swój adres email."),
    // parcelCategory: Yup.string().required("Wybierz kategorie przesyłki."),
    parcelCategory: Yup.array(Yup.string().oneOf(['paczka', 'paleta', 'auto', 'przeprowadzka', 'ponadgabarytowy'])).min(1, "Wybierz kategorie przesyłki.").required(),
    packages: Yup 
    .mixed()
    .when("parcelCategory", { 
      is: (parcelCategory => parcelCategory.find(p => p === 'paczka') ),
      then: Yup.array().of(
        Yup.object().shape({
          packageWeight: Yup.number().min(1).required('Waga paczki jest wymagana.'),
          packageHeight: Yup.number().min(1).required('Wysokość paczki jest wymagana.'),
          packageWidth: Yup.number().min(1).required('Szerokość paczki jest wymagana.'),
          packageLength: Yup.number().min(1).required('Długość paczki jest wymagana.'),
          packageAmount: Yup.number().min(1).required('Wpisz ilość paczek.'),
          packageType: Yup.string().required('Wybierz typ opakowania.')
        }),
        )
      .min(1, 'Dodaj paczkę i uzupełnij dane').required()
    }),
    pallets: Yup 
      .mixed()
      .when("parcelCategory", {   
        is: (parcelCategory => parcelCategory.find(p => p === 'paleta')),
        then: Yup.array().of(
          Yup.object().shape({
            palletType: Yup.string().min(1).required(),
            palletWeight: Yup.number().required('Waga palety jest wymagana'),
            palletHeight: Yup.number().required('Wysokość palety jest wymagana.'),
            palletWidth: Yup.number().required('Szerokość palety jest wymagana.'),
            palletLength: Yup.number().required('Długość palety jest wymagana.'),
            palletAmount: Yup.number().required('Wpisz ilość palet.'),
          })
      )
      .min(1, 'Dodaj paletę i uzupełnij dane')
    }),
    vehicles: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory.find(c => c === 'auto')),
        then: Yup.array().of(
          Yup.object().shape({
            vehicleType: Yup.string().required(),
            vehicleBrand: Yup.string().required().min(2).max(20),
            vehicleModel: Yup.string().required().min(2).max(20),
            vehicleWeight: Yup.number(),
            vehicleLength: Yup.number()
          })
        )
        .min(1, 'Dodaj auto, które chcesz przewieźć')
      }), 
      furnitures: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory.find(f => f === 'przeprowadzka')),
        then: Yup.array().of(
          Yup.object().shape({
            furnitureName: Yup.string().required(),
            furnitureAmount: Yup.string().required(),
          })
        )
        .min(1, 'Dodaj mebel, który chcesz przewieźć')
      }), 
      cargo: Yup
      .mixed()
      .when("parcelCategory", {
        is: (parcelCategory => parcelCategory.find(i => i === 'ponadgabarytowy')),
        then: Yup.array().of(
          Yup.object().shape({
            cargoName: Yup.string().required(),
            cargoAmount: Yup.number().required()
          })
        )
        .min(1, 'Dodaj przedmiot, który chcesz przewieźć')
      })
  }),
  Yup.object().shape({
    [senderName.name]: Yup.string().required(`${senderName.requiredErrorMsg}`),
    [recipientName.name]: Yup.string().required(`${recipientName.requiredErrorMsg}`),
    [senderContact.name]: Yup.string().required(`${senderContact.requiredErrorMsg}`),
    [recipientContact.name]: Yup.string().required(`${recipientContact.requiredErrorMsg}`),
    [senderAddress.name]: Yup.string().required(`${senderAddress.requiredErrorMsg}`),
    [recipientAddress.name]: Yup.string().required(`${recipientAddress.requiredErrorMsg}`),
    [senderCity.name]: Yup.string()
      .nullable()
      .required(`${senderCity.requiredErrorMsg}`),
    [recipientCity.name]: Yup.string()
      .nullable()
      .required(`${recipientCity.requiredErrorMsg}`),
    [senderZip.name]: Yup.string()
      .required(`${senderZip.requiredErrorMsg}`),
    [recipientZip.name]: Yup.string()
      .required(`${recipientZip.requiredErrorMsg}`),
    [senderCountry.name]: Yup.string()
      .nullable()
      .required(`${senderCountry.requiredErrorMsg}`),
    [recipientCountry.name]: Yup.string()
      .nullable()
      .required(`${recipientCountry.requiredErrorMsg}`),
    [senderPhone.name]: Yup.string().required(`${senderPhone.requiredErrorMsg}`),
    [recipientPhone.name]: Yup.string().required(`${recipientPhone.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    servicesType: Yup.string().nullable().required('Wybierz typ usługi'),
    shipmentDate: Yup.date().nullable().required('To pole jest wymagane'),
    pickupDate: Yup.date().nullable().required('To pole jest wymagane'),
  }),
   Yup.object().shape({
      rules: Yup.bool().oneOf([true], 'To pole jest wymagane'),
  }),
];
