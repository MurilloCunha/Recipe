import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import TextInput from '../TextInput'

function IngredientsList({list}) {
  const [ingredients,setIngredients] = useState([list])

  const handleNewIngredient = useCallback(() => {
    setIngredients([...ingredients,""])

  }, [ingredients])


  useEffect(()=>{
    const list = document.querySelector('.ingredients-list')
    list.scroll({top:list.scrollHeight})
  },[ingredients])

  return (
    <ol className="ingredients-list" >
      {ingredients.map((ingredient,index) => (
        <li key={`${ingredient}_${index}`}>
          <div>
            <TextInput 
              variant="form"
              placeholder="Ex.: 1/2 xícara de farinha."
              defaultValue={ingredient}
              required
              name={`ingredient_${index}`}
            />
          </div>
        </li>
      ))}
      <button type="button" onClick={handleNewIngredient}><span>+</span> Novo Ingrediente</button>
    </ol>
  )
}

export default IngredientsList

IngredientsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
}

IngredientsList.defaultProps = {
  list: [""]
}