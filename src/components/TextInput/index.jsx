import React from 'react'

import PropTypes from 'prop-types'

function TextInput(props) {

  const handleError = (err) => {
    return err ? "error":""
  }

  return (
    <input 
    className={`text-input text-input--${handleError(props.error)}`}
    {...props} error="" />
  )
}

export default TextInput

TextInput.propTypes={
  error: PropTypes.bool,
}