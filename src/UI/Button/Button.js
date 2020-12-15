import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({
    type,
    styles,
    text
}) => {
    return (
        <div
            type={type}
            className={`btn btn-${styles}`}>
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
    styles: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Button