import React from 'react'
import PropTypes from 'prop-types'
function Button(props) {
  return (
    <button className={`button--${props.variant}`} {...props}>{props.children}</button>
  )
}

export default Button

Button.propTypes={
  children: PropTypes.string,
  variant:PropTypes.string,
}