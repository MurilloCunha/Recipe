import React, { Fragment, useCallback, useContext, useState } from 'react'

import ImageInput from '../../components/image-input'
import IngredientsList from '../../components/ingredients-list'
import RecipeStepList from '../../components/recipe-step-list'
import TextInput from '../../components/TextInput'
import Button from '../../components/button'
import RecipeBookContext from '../../context/configure-context'
import PotLoader from '../../components/pot-loader'
import { useHistory } from 'react-router-dom'
import SelectInput from '../../components/select-input'
import { CATEGORY_OPTIONS, PUBLISHING_OPTIONS, SERVING_OPTIONS, TIME_OPTIONS } from '../../utils/constants'
import { publishSimulator } from '../../utils/test'


function NewRecipe() {
  const { newRecipe, recipeActions } = useContext(RecipeBookContext)
  const [state, setState] = useState("editing")
  const [error, setError] = useState([])
  const history = useHistory()

  const handleErrors = () => {
    let activeErrors = []
    if (newRecipe.steps.length < 1) {
      activeErrors.push("step_error")
    }

    if (newRecipe.ingredients.length < 1) {
      activeErrors.push("ingredient_error")
    }
    setError(activeErrors)

    return activeErrors.length > 0
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const ignore = ["ingredient", "image", "description", "time"]
    formData.append("fotoUrl", URL.createObjectURL(formData.get("foto")))

    for (var pair of formData.entries()) {
      if (!ignore.some(key => key == pair[0])) {
        recipeActions.addProperties({ [pair[0]]: pair[1] })
      }
    }

    const hasError = handleErrors()
    if (!hasError) {
      setState("publishing")
      publishSimulator(newRecipe)
        .then((result) => {
          setState(result)
            setTimeout(() => {
              recipeActions.reset()
              history.push("/receitas")
            }, 3000)
        })
        .catch((result) => {
          setState(result)
          setTimeout(() => {
            setState("editing")
          }, 3000)
        })
    }
  }, [newRecipe])

  const handleCancel = useCallback(() => {
    recipeActions.reset()
    history.push('/receitas')
  }, [])
  return (
    <section className="new-recipe-wrapper">
      <h1>Nova Receita</h1>
      {state === "editing" &&
        <form onSubmit={handleSubmit}>
          <article className="new-recipe__description">
            <ImageInput id="recipeFoto" name="foto" defaultValue={newRecipe.fotoUrl} />
            <div className="new-recipe__info">
              <TextInput type="text" variant="form" label="Nome" name="name" defaultValue={newRecipe.name} required />
              <SelectInput name="category" defaultValue={newRecipe.category} options={CATEGORY_OPTIONS} required />
              <div className="new-recipe__properties" required>
                <SelectInput name="recipeTime" defaultValue={newRecipe.recipeTime} options={TIME_OPTIONS} required />
                <SelectInput name="serving" defaultValue={newRecipe.serving} options={SERVING_OPTIONS} required />
              </div>
            </div>
          </article>
          <article className="new-recipe__ingredients">
            <h2>Ingredientes</h2>
            {error.includes("ingredient_error") && <p className="new-recipe__error">adicione pelo menos um ingrediente.</p>}
            <IngredientsList />
          </article>
          <article className="new-recipe__steps">
            <h2>Passos</h2>
            {error.includes("step_error") && <p className="new-recipe__error">adicione pelo menos um passo.</p>}
            <RecipeStepList />
          </article>
          <div className="new-recipe__controls">
            <Button variant="primary" onClick={handleCancel}>Cancelar</Button>
            <Button variant="secondary">Publicar</Button>
          </div>
        </form>
      }
      {state !== "editing" &&
        <Fragment>
          <PotLoader state={state} />
          <p className="new-recipe__message">{PUBLISHING_OPTIONS[state]}</p>
        </Fragment>
      }
    </section>
  )
}

export default NewRecipe
