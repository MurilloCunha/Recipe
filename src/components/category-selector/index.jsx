import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function CategorySelector() {
  const history = useHistory()
  const location = useLocation()
  // ultimo 259/1115 primeiro 32
  //
  const handleChange = useCallback((event)=>{
    const categoryList = [...event.currentTarget.children]
    const { dataset } = event.target

    if(dataset.to){
      history.push(dataset.to)
      categoryList.forEach(category => {
        category.dataset.active = 
          category.dataset.to === dataset.to
          ? "true"
          : "false"
      })

    }
  },[location])

  return (
      <ul onClick={handleChange}className="category-selector">
        <li data-active="true"  role="link" data-to="/receitas/todas-receitas">Todas as receitas</li>
        <li data-active="false" role="link" data-to="/receitas/bolos">Bolos</li>
        <li data-active="false" role="link" data-to="/receitas/tortas">Tortas</li>
        <li data-active="false" role="link" data-to="/receitas/doces">Doces</li>
        <li data-active="false" role="link" data-to="/receitas/carnes">Carnes</li>
        <li data-active="false" role="link" data-to="/receitas/aves">Aves</li>
        <li data-active="false" role="link" data-to="/receitas/peixes">Peixes</li>
        <li data-active="false" role="link" data-to="/receitas/frutos-do-mar">Frutos do mar</li>
        <li data-active="false" role="link" data-to="/receitas/saladas">Saladas</li>
        <li data-active="false" role="link" data-to="/receitas/sopas">Sopas</li>
        <li data-active="false" role="link" data-to="/receitas/bebidas">Bebidas</li>
        <li data-active="false" role="link" data-to="/receitas/lanches">Lanches</li>
      </ul>    
  )
}

export default CategorySelector
