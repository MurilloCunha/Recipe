import { ACTIONS } from './actions'

export const INITIAL_STATE = {
  newRecipe: {
    ingredients:[],
    steps:[]
  },
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PROPERTIES:
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          ...action.properties
        }
      }

    case ACTIONS.RESET:
      return ({ ...state, newRecipe: {} })

    case ACTIONS.ADD_STEP:
      state.newRecipe.steps.splice(action.index,1,action.value)
      return {...state}

    case ACTIONS.DELETE_STEP:
      return {
        ...state, 
        newRecipe:{
          ...state.newRecipe,
          steps:state.newRecipe.steps.filter(item => 
            state.newRecipe.steps.indexOf(item) != action.index
          ),
        }
      }

    case ACTIONS.ADD_INGREDIENT:
      state.newRecipe.ingredients.splice(action.index,1,action.value)
      return {...state}
      
    case ACTIONS.DELETE_INGREDIENT:
      return {
        ...state, 
        newRecipe:{
          ...state.newRecipe,
          ingredients:state.newRecipe.ingredients.filter(item => 
            state.newRecipe.ingredients.indexOf(item) != action.index
          ),
        }
      }

      default:
      return state
  }
}

export default reducer