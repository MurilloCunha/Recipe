import React from 'react'
import PropTypes from 'prop-types'
import avatar from '../../icons/avatar.svg'

function Avatar({user}) {
  return (
    <div className="avatar">
      <img src={user.img} alt=""/>
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
    img:avatar,
    name:"usuario",
    totalReceipts:0
  }
}