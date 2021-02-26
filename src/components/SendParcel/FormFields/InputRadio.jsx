import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@material-ui/core';
import './inputRadio.css';

const useStyles = makeStyles({
  root: {
      marginTop: '20px',
      border: 0,
      borderRadius: 15,
      color: 'white',
      background: 'linear-gradient(45deg, #333, #999)'
  }
})

export default function InputRadio(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  const classes = useStyles();

  const {categoryname} = props
  
  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <FormControl  className={categoryname} {...rest}>
      
        <FormControlLabel
          value={field.value}
          checked={field.checked}
          control={
            <Radio 
              className={categoryname} 
              {...field} 
              onChange={_onChange} />
            }
              label={label}
          />
          {/* wyswietl komunikat tylko przy pierwszym obrazku, pod warunkiem ze zaden nie zostal klikniety a klient chce isc dalej*/}
          {field.value === 'paczka' ? _renderHelperText() : null}
        </FormControl>
      
    </>
  );
}
