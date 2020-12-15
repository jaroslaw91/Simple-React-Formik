import React from 'react'
import PropTypes from 'prop-types'

import './TwoButtons.scss'
import Button from './../Button'

const TwoButtons = ({ textPrimary, textSecondary }) => {
    return (
        <div className='two-buttons'>
            <Button
                text={textSecondary}
                style='secondary' />
            <Button
                type='submit'
                text={textPrimary}
                style='primary' />
        </div>
    )
}

TwoButtons.defaultProps = {
    textPrimary: 'Send',
    textSecondary: 'Clear'
}

TwoButtons.propTypes = {
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string
}

export default TwoButtons
