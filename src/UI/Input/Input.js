import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = ({
    name,
    type,
    label
}) => {
    const [display, setDisplay] = useState(false)

    const onLabelDispaly = event => {
        const value = event.target.value
        value.length
            ? setDisplay(true)
            : setDisplay(false)
    }

    return (
        <div className='input'>
            <label
                htmlFor={name}
                className={`label label-${display}`}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={label}
                onChange={onLabelDispaly} />
        </div>
    )
}

Input.defaultProps = {
    type: 'text'
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export default Input
