import React from 'react'
import PropTypes from 'prop-types'

import svgIcons from './svg-icons'

function Icon({id, color,active, activeColor="#000"}) {

  const iconColor = active ? activeColor : color

  return (
    <figure className="svg-icon">
      {svgIcons(id,iconColor)}
    </figure>
  )
}

export default Icon

Icon.propTypes ={
  id: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
  activeColor: PropTypes.string,
}
