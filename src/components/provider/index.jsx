import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import reducer, { INITIAL_STATE } from '../../modules/new-recipe/reducer'
import recipeActions from '../../modules/new-recipe/actions'
import RecipeBookContext from '../../context/configure-context'

function Provider({children}) {
  const [state, dispatch] = useReducer(reducer,INITIAL_STATE)
  const appState = {
    newRecipe: state.newRecipe,
    recipeActions: recipeActions(dispatch)
  }
  return (
    <RecipeBookContext.Provider  value={appState}  >
      {children}
    </RecipeBookContext.Provider>
  )
}

export default Provider

Provider.propTypes = {
  children: PropTypes.element
}