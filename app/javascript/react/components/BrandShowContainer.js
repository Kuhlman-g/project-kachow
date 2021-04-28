import React, { useState, useEffect } from 'react'
import BrandShowTile from './BrandShowTile.js'

const BrandShowContainer = (props) => {
  const [brand, setBrand] = useState({
    id: null,
    name: '',
    pizzas: []
  })

  const brandId = props.match.params.id

  const getPizzas = async () => {
    try {
      const response = await fetch(`/api/v1/brands/${brandId}`)
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedPizzas= await response.json()
      setBrand(parsedPizzas.brand)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }  
  
  useEffect(()=>{
      getPizzas()
  }, [])

  const pizzaTiles = brand.pizzas.map( (pizza) => {
    return(
      <BrandShowTile name={pizza.product_name} id={pizza.id} key={pizza.id} />
    )
  })
  
  return(
    <>
      <div className='cell small-11 text-center'>
        <h2>{brand.name}</h2>
      </div>
      {pizzaTiles}
    </>
  )
}

export default BrandShowContainer