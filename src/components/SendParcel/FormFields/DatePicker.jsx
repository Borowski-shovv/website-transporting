import React from 'react';
// import DateView from 'react-datepicker';
import { DatePicker as MaterialDatePicker } from '@material-ui/pickers';
import 'react-datepicker/dist/react-datepicker.css';
import {Field, ErrorMessage} from 'formik';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';


const useStyles = makeStyles(theme => ({
    dateInput: {
        width: '100%'
    },
}))

function DatePicker(props) {
    const {label, name, ...rest} = props
   
    const classes = useStyles()
    return (
        <div className="form-control date-picker-styles">
            <Field name={name} className={classes.deepInput}>
                {
                    ({form, field}) => {
                        const { setFieldValue} = form
                        const {value} = field
                        return (
                            <MaterialDatePicker
                                id={name}
                                value={value}
                                format="MM/dd/yyyy"
                                autoOk
                                clearable
                                onChange={val => setFieldValue(name, val)}
                                {...rest}
                                label={label}
                                
                                clearLabel="Wyczyść"
                                cancelLabel="Wyjdź"
                            />

                        )
                    }
                }
            </Field>
            {/* <ErrorMessage name={name} compontent={TextError} /> */}
        </div>
    )
}

export default DatePicker
