import React from 'react'
import PropTypes from 'prop-types'

import './Form.scss'

const Form = ({
    handleSubmit,
    children
}) => {

    return (
        <form
            className='form'
            onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func,
    children: PropTypes.array.isRequired
}

export default Form
