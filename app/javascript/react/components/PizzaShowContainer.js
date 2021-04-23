import React, { useState, useEffect } from 'react'

const PizzaShowContainer = (props) => {
  const [pizza, setPizza] = useState({ 
    product_name: "", 
    cost: null
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
      setPizza(parsedPizza)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
} 

  useEffect( () => {
    fetchPizza()
  }, [])


  return(
    <div className='single_pizza_show'>
      <h1>hello single pizza</h1>

    </div>
  )
}

export default PizzaShowContainer