import React, { useCallback } from 'react'
import { useLocation, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Icon from '../icon'


function Navigation({baseColor, activeColor}) {
  const location = useLocation()
  console.log(location.pathname)

  const isActive = useCallback((page)=>{
    return location.pathname.includes(page)
  },[location])

  return (
    <nav>
      <ul>
        <Link to="/home">
          <li >
            <Icon id="home" color={baseColor} activeColor={activeColor} active={isActive("home")}/>
            <p data-active={isActive("home")}>Home</p>
          </li>
        </Link>
        <Link to="/receitas">
          <li>
            <Icon id="recipes" color={baseColor} activeColor={activeColor} active={isActive("receitas")}/>
            <p data-active={isActive("receitas")}>Receitas</p>
          </li>
        </Link>
        <Link to="/nova-receita">
          <li>
            <Icon id="addRecipe" color={baseColor} activeColor={activeColor} active={isActive("nova-receita")}/>
            <p data-active={isActive("nova-receita")}>Nova Receita</p>
          </li>
        </Link>
        <Link to="/home">
          <li>
            <Icon id="logout" color={baseColor} activeColor={activeColor} />
            <p >Sair</p>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation

Navigation.propTypes={
  baseColor: PropTypes.string,
  activeColor: PropTypes.string,
}