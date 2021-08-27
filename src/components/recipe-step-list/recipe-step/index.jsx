import React, { useCallback, useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../icon'
import ImageInput from '../../image-input'
import Button from '../../button'
import RecipeBookContext from '../../../context/configure-context'

function RecipeStep({index}) {
  const { newRecipe ,recipeActions } = useContext(RecipeBookContext)

  const [open,setOpen] = useState(true)
  const [step, setStep] = useState({ ...newRecipe.steps[index]})

  const handleChange = useCallback((event) => {
    const { value, name } = event.target
    setStep({ ...step, [name]: value })
  }, [step])

  const handleSave = useCallback((event) => {
    event.preventDefault()
    recipeActions.addStep(step,index)
    setOpen(!open)
  }, [open, step])

const handleRemove = () => {
  recipeActions.deleteStep(index)
}

return (
  <details className="recipe-step" open={open}>
    <summary>
      <p>{index + 1}° passo: </p>
      <p>{newRecipe.steps[index].description}</p>
      <Icon id="edit" size="small" />
      <button type="button" onClick={handleRemove}><Icon id="delete" color="rgba(255,0,0,1)" size="small" />  </button>
    </summary>
    <div className="recipe-step__info" >
      <textarea name={`description`} defaultValue={newRecipe.steps[index].description} placeholder="Ex.: Misture a farinha e os ovos..." onChange={handleChange}></textarea>
      <div className="recipe-step__extra-info">
        <div className="recipe-step__timer">
          <p>Adicionar Timer?</p>
          <label htmlFor={`step${index}Time`}>
            <Icon id="timer" size="large" color="#b3b3b3" />
          </label>
          <input type="time" id={`step${index}Time`} name={`time`} max="02:00" defaultValue={newRecipe.steps[index].timer} onChange={handleChange} />
        </div>
        <div className="recipe-step__img">
          <p>Adicionar foto/video?</p>
          <ImageInput id={`step${index}Img`} name="image" src={newRecipe.steps[index].img} getFile={handleChange} />
        </div>
      </div>
      <Button variant="primary" type="button" onClick={handleSave}>salvar</Button>
    </div>
  </details>
)
}

export default RecipeStep


RecipeStep.propTypes = {
  index: PropTypes.string
}

RecipeStep.defaultProps = {
  index:0
}