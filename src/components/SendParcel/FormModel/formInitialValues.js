/* eslint-disable import/no-anonymous-default-export */
import sendParcelModel from './sendParcelModel';
const {
  formField: {
    email,
    firstName,
    firstName2,
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
    contactPerson,
    contactPerson2
  },
} = sendParcelModel;


export default {
  parcelCategory: [],
  [email.name]: '',
  [firstName.name]: '',
  [firstName2.name]: '',
  [contactPerson.name]: '',
  [contactPerson2.name]: '',
  [address1.name]: '',
  [address2.name]: '',
  [city.name]: '',
  [city2.name]: '',
  [zipcode.name]: '',
  [zipcode2.name]: '',
  [country.name]: '',
  [country2.name]: '',
  [contactNumber.name]: '',
  [contactNumber2.name]: '',
  files: [],
  numberOfPackages: '',
  parcel: [
    // {
    //   name: '',
    //   weight: '',
    //   height: '',
    //   width: '', 
    //   length: '',
    //   lengthh: '',
    //   amount: '', 
    //   kindOfpackage: '',
    // }  
  ],
  pallet: [
    {
      name: '',
      weight: '',
      height: '',
      width: '', 
      length: '',
      amount: '',
    }
  ],
  car: [
    {
      type: '',
      brand: '',
      model: '',
    }
  ],
  removal: [
    // {
    //   type: '',
    // }
  ]
};
