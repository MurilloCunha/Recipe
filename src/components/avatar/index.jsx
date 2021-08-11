import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon'

function Avatar({user}) {
  return (
    <div className="avatar" >
      <Icon id="avatar" color="#f78c05"/>
      <div>
        <p>{user.name}</p>
        <p>{user.totalReceipts} receitas</p>
      </div>
    </div>
  )
}

export default Avatar

Avatar.propTypes = {
  user: PropTypes.shape({
    name:PropTypes.string,
    img: PropTypes.string,
    totalReceipts: PropTypes.number,
  }),
}

Avatar.defaultProps = {
  user:{
    img:"",
    name:"usuario",
    totalReceipts:0
  }
}