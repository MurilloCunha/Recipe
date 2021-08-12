import React from 'react'

import PropTypes from 'prop-types'

function TextInput(props) {
  return (
    <input 
    className={`text-input`}
    data-error={props.error}
    {...props} error="" />
  )
}

export default TextInput

TextInput.propTypes={
  error: PropTypes.bool,
}