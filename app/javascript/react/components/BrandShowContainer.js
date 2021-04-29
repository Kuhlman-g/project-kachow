import React, { useState, useEffect } from 'react'

import BrandShowTile from './BrandShowTile.js'
import PizzaForm from './PizzaForm.js'

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


  const pizzaTiles = pizzas.map( (pizza) => {
    return(
      <BrandShowTile name={pizza.product_name} id={pizza.id} key={pizza.id} />
    )
  })

  const addPizza = async (formPayload) => {
    const response = await fetch("/api/v1/brands/", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPayload),
    })
    const parsedNewPizza = await response.json()

    setPizzas(parsedNewPizza)
  }
    
  return(
    <>
      <div className='grid-x grid-margin-x align-spaced pizzaContainer'>
        <div className='cell small-11 text-center'>
          <h2>{brand.name}</h2>
        </div>
        {pizzaTiles}
        <PizzaForm brand_name={brand.name} brand_id={brand.id} addPizza={addPizza}/>
      </div>
    </>
  )
}

export default BrandShowContainer