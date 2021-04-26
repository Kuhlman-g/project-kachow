import React, { useState, useEffect } from 'react'

const PizzaShowContainer = (props) => {
  const [pizza, setPizza] = useState({ 
    product_name: "", 
    cost: null
  })

  const [brand, setBrand] = useState({})
     
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
      setPizza(parsedPizza['pizza'])
      setBrand(parsedPizza['brand'])
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
} 

  useEffect( () => {
    fetchPizza()
  }, [])

  let pizza_cost
  if(pizza.cost != null) {
    pizza_cost = `Average cost is: $${pizza.cost}`
  }

  let pizzaTile = (
    <>
      <h2>{pizza.product_name}</h2>
      <p>Brand: {brand.name}</p>
      <p>{pizza_cost}</p>
    </>
  )

  return(
    <div className='single_pizza_show'>
      {pizzaTile}
    </div>
  )
}

export default PizzaShowContainer