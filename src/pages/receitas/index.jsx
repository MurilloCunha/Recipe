import React from 'react'
import RecipeCard from '../../components/recipe-card';
import SearchInput from '../../components/search-Input';
import CategorySelector from '../../components/category-selector';

function Recipes() {
  return (
    <section className="recipes-wrapper">
      <SearchInput />
      <CategorySelector />
      <RecipeCard />
    </section>
  )
}

export default Recipes
