import React, { useCallback } from 'react'

import ImageInput from '../../components/image-input'
import TextInput from '../../components/TextInput'

function NewRecipe() {

  const handleSubmit = useCallback((event)=> {
    event.preventDefault()

    const formData = new FormData(event.target)

    console.log(formData.get('recipeFoto'))
  },[])

  return (
    <section className="new-recipe-wrapper">
      <h1>Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <article className="new-recipe__description">
          <ImageInput name="recipeFoto"/>
          <div>
            <TextInput type="text" variant="form" label="Nome" name="recipeName" required/>
            <select name="category" required>
              <option value="">Categoria</option>
              <option value="Bolos">Bolos</option>
              <option value="Tortas">Tortas</option>
              <option value="Doces">Doces</option>
              <option value="Massa">Massas</option>
              <option value="Carnes">Carnes</option>
              <option value="Aves">Aves</option>
              <option value="Peixes">Peixes</option>
              <option value="Frutos-do-mar">Frutos do mar</option>
              <option value="Saladas">Saladas</option>
              <option value="Sopas">Sopas</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Lanches">Lanches</option>
            </select>
            <div className="new-recipe__properties" required>
              <select name="preparationTime">
                <option value="">Tempo</option>
                <option value="10-30">10-30min.</option>
                <option value="30-60">30-60min.</option>
                <option value="60-120">1h-2h</option>
                <option value=">120">mais de 2h</option>
              </select>
              <select name="serve" required>
                <option value="">serve</option>
                <option value="1">1 pessoa</option>
                <option value="1-2">1-2 pessoas</option>
                <option value="2-4">2-4 pessoas</option>
              </select>
            </div>
          </div>
        </article>
        <article className="new-recipe__ingredients">
          <h2>Ingredientes</h2>
        </article>
          <button type="submit">TESTE</button>
      </form>
    </section>
  )
}

export default NewRecipe
