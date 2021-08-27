export const ACTIONS = {
  ADD_PROPERTIES: "ADD_PROPERTIES",
  RESET: "RESET",
  ADD_STEP: "ADD_STEP",
  DELETE_STEP: "DELETE_STEP",
  ADD_INGREDIENT: "ADD_INGREDIENT",
  DELETE_INGREDIENT: "DELETE_INGREDIENT"
}

export const recipeActions = (dispatch) => ({
  addProperties: (properties) => dispatch({ type: ACTIONS.ADD_PROPERTIES, properties }),
  reset: () => dispatch({ type: ACTIONS.RESET }),
  addStep: (value,index) => { dispatch({ type: ACTIONS.ADD_STEP, value,index }) },
  deleteStep: index => { dispatch({ type: ACTIONS.DELETE_STEP, index }) },
  addIngredient: (value, index) => { dispatch({ type: ACTIONS.ADD_INGREDIENT, value, index }) },
  deleteIngredient: index => { dispatch({ type: ACTIONS.DELETE_INGREDIENT, index }) }
})

export default recipeActions
