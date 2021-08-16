import React, { useCallback } from 'react'
import Icon from '../icon'

function SearchInput() {

  const handleChange = useCallback((event)=>{
    const {value} = event.target
    //apply search to database in future
    console.log(value)
  },[])

  return (
    <div className="search-input">
      <Icon id="search" size="medium" />
      <input onChange={handleChange} type="text" placeholder="Buscar receita"/>
    </div>
  )
}

export default SearchInput
