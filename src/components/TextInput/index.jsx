import React, {useCallback, useState} from 'react'

import PropTypes from 'prop-types'

function TextInput(props) {
  const [empty,setEmpty] = useState("empty")

  const handleChange= useCallback((event) => {
    const { value } = event.target
    setEmpty(value.length > 0 ? value : "empty")
  },[])

  return (
    <div className="text-input-wrapper">
      <input 
        className={`text-input`}
        data-error={props.error}
        data-variant={props.variant}
        {...props}
        data-empty={empty}
        onChange={handleChange}
        id={props.name}
      />
      {props.label && <label htmlFor={props.name} >{props.label}</label>}
    </div>
  )
}

export default TextInput

TextInput.propTypes={
  error: PropTypes.bool,
  variant: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
}

TextInput.defaultProps = {
  error:"false",
  variant:"",
  label:undefined,
  name:"input"
}