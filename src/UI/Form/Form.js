import React from 'react'
import PropTypes from 'prop-types'

import './Form.scss'

const Form = ({
    handleSubmit,
    children
}) => {

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
}

export default Form
