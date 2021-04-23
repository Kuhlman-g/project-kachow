import React, { useState, useEffect } from 'react'

const BrandShowContainer = (props) => {
    const [pizzas, setPizzas] = useState([])

    let brandId = props.match.params.id

    const getPizzas = async () => {
	    try {
	      const response = await fetch(`/api/v1/brands/${brandId}`)
	      if (!response){
	        const errorMessage = `${response.status} (${response.statusTest})`
	        const error = new Error(errorMessage)
	        throw(error)
	      }
	      const parsedPizzas= await response.json()
	      setPizzas(parsedPizzas)
	    } catch(err){
	      console.error(`Error in fetch: ${err.message}`)
	    }
    }  
    
    useEffect(()=>{
        getPizzas()
    }, [])

    let pizzaTiles = pizzas.map( (pizza) => {
      return(
          <li key={pizza.id}>{pizza.product_name}</li>
      )
    })

    return(
      <ul>
          {pizzaTiles}
      </ul>
    )
}

export default BrandShowContainer