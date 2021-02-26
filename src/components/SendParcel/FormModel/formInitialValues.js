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
    expiryDate,
  }, 
} = sendParcelModel;



export default {
  parcelCategory: '',
  [email.name]: '',
  [firstName.name]: '',
  [firstName2.name]: '',
  [lastName.name]: '',
  [lastName2.name]: '',
  [address1.name]: '',
  [address2.name]: '',
  [city.name]: '',
  [city2.name]: '',
  [zipcode.name]: '',
  [zipcode2.name]: '',
  [country.name]: '',
  [country2.name]: '',
  [expiryDate.name]: '',
};
