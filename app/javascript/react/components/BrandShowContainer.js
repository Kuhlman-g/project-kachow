import React, { useState, useEffect } from 'react'

const BrandShowContainer = (props) => {
    const [pizzas, setPizzas] = useState([])
    const [brand, setBrand] = useState({name: ''})

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
	      setPizzas(parsedPizzas.pizzas)
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
        <div class='cell small-4 pizzaCard'>
          <div class='card'>
            <div class='card-section text-center'  key={pizza.id}>
              {pizza.product_name}
            </div>
          </div>
        </div>
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