import React from 'react'
import PropTypes from 'prop-types'

import svgIcons from './svg-icons'

function Icon({id, color,active, activeColor="#000", size="medium"}) {

  const iconColor = active ? activeColor : color

  return (
    <figure className="svg-icon" data-size={size}>
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
  size: PropTypes.string,
}
