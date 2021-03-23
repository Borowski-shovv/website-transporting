/* eslint-disable import/no-anonymous-default-export */
import sendParcelModel from './sendParcelModel';
const {
  formField: {
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


export default {
  parcelCategory: [],
  [email.name]: '',
  [senderName.name]: '',
  [recipientName.name]: '',
  [senderContact.name]: '',
  [recipientContact.name]: '',
  [senderAddress.name]: '',
  [recipientAddress.name]: '',
  [senderCity.name]: '',
  [recipientCity.name]: '',
  [senderZip.name]: '',
  [recipientZip.name]: '',
  [senderCountry.name]: '',
  [recipientCountry.name]: '',
  [senderPhone.name]: '',
  [recipientPhone.name]: '',
  files: [],
  packages: [],
  pallet: [],
  vehicles: [],
  furnitures: [],
  cargo: [],
  rules: false,
  servicesType: '',
};
