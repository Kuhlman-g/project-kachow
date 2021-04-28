import React, { useState, useEffect } from 'react'

import SinglePizzaReview from './SinglePizzaReview.js'
import PizzaTile from './PizzaTile.js'
import ReviewTile from './ReviewTile.js'


const PizzaShowContainer = (props) => {
  const [pizza, setPizza] = useState({ 
    product_name: "", 
    cost: null,
    brand: "",
    brand_id: null,
    reviews: []
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
      new_pizza.reviews = parsedPizza.reviews
      setPizza(new_pizza)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  } 

  useEffect( () => {
    fetchPizza()
  }, [])

  const addNewReview = async (formPayload) => {
    const response = await fetch("/api/v1/pizzas/", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPayload),
    })
    const parsedNewReview = await response.json()
    // const newReview = pizza
    debugger
    const new_pizza = parsedNewReview.pizza
    new_pizza.brand = parsedNewReview.brand.name
    new_pizza.brand_id = parsedNewReview.brand.id
    new_pizza.reviews = parsedNewReview.reviews
    setPizza(new_pizza)
    //setReviews(newReview)
  }

  let pizza_cost
  if(pizza.cost != null) {
    pizza_cost = `Average cost is: $${pizza.cost}`
  }

  let reviewArray = pizza.reviews.map(review => {
    return(
      <ReviewTile name={review.name} body={review.body} rating={review.rating} key={review.id} />
    )
  })

  return(
      <>
      <div className='single_pizza_show'>
        <PizzaTile pizza={pizza}/>
      </div>
        <div>
          <SinglePizzaReview addItem={addNewReview} pizzaId={pizzaId} />
        </div>
        <div>
          {reviewArray}
        </div>
      </>
  )
}

export default PizzaShowContainer