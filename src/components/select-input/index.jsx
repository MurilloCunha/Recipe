import React from 'react'
import PropTypes from 'prop-types'

function SelectInput({ options, name, defaultValue, required }) {
  return (
    <select name={name} defaultValue={defaultValue} required={required}>
      {options.map((option, index) => 
        <option key={`${name}_option-${index}`} value={option.value}>{option.text}</option>
      )}
    </select>
  )
}

export default SelectInput

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.string
  })),
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool
}

SelectInput.defaultProps = {
  options: [{ value: "", text: "-" }]
}