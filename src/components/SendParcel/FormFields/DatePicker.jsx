import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Field, ErrorMessage} from 'formik';


function DatePicker(props) {
    const {label, name, ...rest} = props
    return (
        <div className="form-control">
            <label className="datePicker-label" htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const { setFieldValue} = form
                        const {value} = field
                        return <DateView id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name, val)}/>
                    }
                }
            </Field>
            {/* <ErrorMessage name={name} compontent={TextError} /> */}
        </div>
    )
}

export default DatePicker
