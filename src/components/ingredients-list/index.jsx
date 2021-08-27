import React, { useCallback, useEffect, useContext } from 'react'

import TextInput from '../TextInput'
import Icon from '../icon'
import RecipeBookContext from '../../context/configure-context'

function IngredientsList() {
  const { newRecipe, recipeActions } = useContext(RecipeBookContext)

  const handleNewIngredient = useCallback((event) => {
    const { value, dataset } = event.target
    recipeActions.addIngredient(value, dataset.index)
  }, [])

  const handleRemoveIngredient = useCallback((event) => {
    const { dataset } = event.currentTarget
    recipeActions.deleteIngredient(dataset.index)
  }, [])

  useEffect(() => {
    const list = document.querySelector('.ingredients-list')
    list.scroll({ top: list.scrollHeight, behavior: 'smooth' })
  }, [])

  return (
    <ol className="ingredients-list" >
      {newRecipe.ingredients.map((ingredient, index) => (
        <li key={`${ingredient}_${index}`}>
          <div>
            <TextInput
              variant="form"
              placeholder="Ex.: 1 1/2 xícara de farinha."
              required
              onBlur={handleNewIngredient}
              defaultValue={ingredient}
              name={`ingredient`}
              data-index={index}
              formNoValidate
              />
            <button type="button" data-index={index} onClickCapture={handleRemoveIngredient}><Icon id="delete" color="rgba(255,0,0,1)" size="small" /> </button>
          </div>
        </li>
      ))}
      <button type="button" data-index={newRecipe.ingredients.length} onClick={handleNewIngredient}><span>+</span> Novo Ingrediente</button>
    </ol>
  )
}

export default IngredientsList
