import React, { useState, useEffect } from 'react'

import PizzaTile from './PizzaTile.js'

const PizzaShowContainer = (props) => {
  const [pizza, setPizza] = useState({ 
    product_name: "", 
    cost: null,
    brand: "",
    brand_id: null
  })
     
  let pizzaId = props.match.params.id

  const fetchPizza = async () => {
    try {
      const response = await fetch(`/api/v1/pizzas/${pizzaId}`)
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedPizza= await response.json()
      const new_pizza = parsedPizza.pizza
      new_pizza.brand = parsedPizza.brand.name
      new_pizza.brand_id = parsedPizza.brand.id
      setPizza(new_pizza)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  } 

  useEffect( () => {
    fetchPizza()
  }, [])

  return(
    <div className='single_pizza_show'>
      <PizzaTile pizza={pizza}/>
    </div>
  )
}

export default PizzaShowContainer