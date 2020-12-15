import React from 'react'
import PropTypes from 'prop-types'

import './Modal.scss'

const Modal = ({ styles }) => {
    return (
        <div className={`modal modal-${styles}`}>
            <div className='modal-content'>
                <iframe
                    src='https://giphy.com/embed/MOWPkhRAUbR7i'
                    title='gif'
                    width='480'
                    height='217'
                    frameBorder='0'
                    className='giphy-embed'
                    allowFullScreen />
                <p>You did it! Sent to nowhere!
                Now refresh the page because I didn't make the close button.
                I didn't feel like it.</p>
                <iframe
                    src='https://giphy.com/embed/LloxpDSM9r8ha'
                    title='gif'
                    width='180'
                    frameBorder='0'
                    className='giphy-embed'
                    allowFullScreen />
            </div>
        </div>
    )
}

Modal.defaultProps = {
    styles: false
}

Modal.propTypes = {
    styles: PropTypes.bool
}

export default Modal
