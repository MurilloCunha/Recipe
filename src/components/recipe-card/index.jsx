import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon'
import tray from '../../images/tray.svg'

function RecipeCard({recipe}) {

  const scoreMarker = useCallback((score) => {
    const starList = []
    for(let i = 0; i<5; i++){
      i < score 
        ? starList.push(<Icon key={`${recipe.title}-star${i}`} id="starFilled" size="small" color="#f78c05"/>)
        : starList.push(<Icon key={`${recipe.title}-star${i}`} id="starBorder" size="small" color="#f78c05"/>)
    }
    return[...starList]
  },[])

  return (
    <div className="recipe-card">
        <div className="recipe-card__info">
          <h2>{recipe.title}</h2>
          <div className="recipe-card__score">
            {scoreMarker(recipe.score)}
          </div>
          <ul>
            <li>
              <Icon id="timer" size="small" color="#f78c05"/>
              <p>{`${recipe.time[0]} a ${recipe.time[1]}`} min.</p>
            </li>
            <li>
              <Icon id="people" size="small" color="#f78c05"/>
              <p>{recipe.people} pessoas</p>
            </li>
          </ul>
        </div>
        <img src={recipe.imageUrl} alt="foto da receita" />
    </div>
  )
}

export default RecipeCard

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    class:PropTypes.string,
    score: PropTypes.number,
    time: PropTypes.arrayOf(PropTypes.number),
    people:PropTypes.number,
    imageUrl:PropTypes.string,
    author: PropTypes.string,
  })
}
RecipeCard.defaultProps = {
  recipe:{
    title:"Sem título",
    class:"outros",
    score:0,
    time:[25,30],
    people:0,
    imageUrl:tray,
    author:"aaaaaaaaaa"
  }
}