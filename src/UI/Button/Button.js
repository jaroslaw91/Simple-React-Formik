import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({
    type,
    style,
    text
}) => {
    return (
        <div
            type={type}
            className={`btn btn-${style}`}>
            {text}
        </div>
    )
}

Button.defaultProps = {
    type: '',
    style: 'primary'
}

Button.propTypes = {
    type: PropTypes.string,
    style: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Button
