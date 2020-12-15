import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({
    type,
    styles,
    text,
    onClick
}) => {
    return (
        <button
            type={type}
            className={`btn btn-${styles}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    type: '',
    style: 'primary'
}

Button.propTypes = {
    type: PropTypes.string,
    styles: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
