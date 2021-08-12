import React from 'react'
import PropTypes from 'prop-types'


function Box(props) {
  return (
    <div className="box" data-direction={props.dir} data-style={props.style}>
      {props.children}
    </div>
  )
}

export default Box

Box.propTypes ={
  children: PropTypes.any,
  dir: PropTypes.string,
  style: PropTypes.string,
}