import React from 'react'
import { Form } from 'formik'
import PropTypes from 'prop-types'

import './FormFormik.scss'

const FormFormik = ({ children }) => {

    return (
        <Form
            className='form'>
            {children}
        </Form>
    )
}

FormFormik.propTypes = {
    children: PropTypes.array.isRequired
}

export default FormFormik
