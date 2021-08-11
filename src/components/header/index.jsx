import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../logo'
import Button from '../button'
import Avatar from '../avatar'
import Navigation from '../navigation'

function Header() {
  //for test only
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ logged: true })

  return (
    <header>
      <Logo />
      {!user.logged && 
        <Link to="/login">
          <Button variant="primary" type="button">Entrar</Button>
        </Link>
      }
      {user.logged &&
        <div className="header__info">
          <div className="header__navigation">
            <Navigation baseColor="#fff" activeColor="#fff"/>
          </div>
          <Avatar />
        </div> 
      }
    </header>
  )
}

export default Header
