import React from 'react'

function TextInput(props) {

  const handleError = (err) => {
    return err ? "error":""
  }

  return (
    <input 
    className={`text-input text-input--${handleError(props.error)}`}
    {...props} />
  )
}

export default TextInput
