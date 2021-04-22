import React, { useState, useEffect } from 'react'

const PizzaShowContainer = (props) => {
    const [pizza, setPizza] = useState({
        brand: "",
        product_name: "",
        cost: ""
    })

    let pizzaId = props.match.params.id

    const getPizza = async () => {
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
    
    useEffect(()=>{
        getPizza(),
        []
    })


    return(
      <ul>
          <li>{pizza.product_name}</li>
      </ul>
    )
}

export default PizzaShowContainer