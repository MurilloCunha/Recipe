import React from 'react'
import PropTypes from 'prop-types'
function Button(props) {
  return (
    <button 
      className={`button--${props.variant} ${props.animationClass}`}
      {...props}
    >
      {props.children}
      </button>
  )
}

export default Button

Button.propTypes={
  children: PropTypes.any,
  variant:PropTypes.string,
  animationClass:PropTypes.string,
}