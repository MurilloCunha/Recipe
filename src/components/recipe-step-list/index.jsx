import React, { useEffect, useContext, useCallback } from 'react'
import RecipeStep from './recipe-step'
import RecipeBookContext from '../../context/configure-context'

function RecipeStepList() {
  const { newRecipe, recipeActions } = useContext(RecipeBookContext)

  const handleNewStep = useCallback(() => {
    console.log(newRecipe.steps.length)
    recipeActions.addStep({},newRecipe.steps.length)
  },[])

  useEffect(()=>{
    const list = document.querySelector('.step-list')
    list.scroll({top:list.scrollHeight, behavior:'smooth'})
  },[])

  return (
    <ul className="step-list">
      {newRecipe.steps.map((step,index) =>(
        <li key={`${step}`}>
          <RecipeStep index={index} />
        </li>
        ))}

      <button type="button" onClick={handleNewStep}><span>+</span> Novo Passo</button>
    </ul>
  )
}

export default RecipeStepList
