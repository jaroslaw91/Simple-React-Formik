import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik';

import './InputFormik.scss'

const InputFormik = ({
    label,
    ...props
}) => {
    const [display, setDisplay] = useState(false)
    const [field, meta] = useField(props)

    const onLabelDispaly = event => {
        const value = event.target.value
        value.length
            ? setDisplay(true)
            : setDisplay(false)
    }

    return (
        <>
            <div className='input'>
                <label
                    htmlFor={field.name}
                    className={`label label-${display}`}
                >
                    {label}
                </label>
                <input
                    {...field} {...props}
                    placeholder={label}
                    onSelect={onLabelDispaly} />
            </div>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

InputFormik.propTypes = {
    label: PropTypes.string.isRequired
}

export default InputFormik
