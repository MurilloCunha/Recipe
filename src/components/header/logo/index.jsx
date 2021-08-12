import React from 'react'

import logo from '../../../images/refPot.svg'

function Logo({size="small"}) {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" data-size={size}/>
    </div>
  )
}
export default Logo
