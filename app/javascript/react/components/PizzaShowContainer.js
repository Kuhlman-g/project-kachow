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
    reviews: [],
    id: null,
    votes: [[]]
  })
  const [errors, setErrors] = useState([])
     
  let pizzaId = props.match.params.id

  const fetchPizza = async () => {
    try {
      const response = await fetch(`/api/v1/brands/${props.match.params.brand_id}/pizzas/${pizzaId}`)
      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedPizza= await response.json()
      const new_pizza = parsedPizza.pizza
      new_pizza.brand_id = parsedPizza.pizza.brand.id
      new_pizza.brand = parsedPizza.pizza.brand.name
      new_pizza.users = parsedPizza.pizza.users
      setPizza(new_pizza)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  } 

useEffect( () => {
    fetchPizza()
  }, [])

  const addNewReview = async (formPayload) => {
    const response = await fetch(`/api/v1/reviews/`, {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPayload),
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusTest})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const parsedNewReview = await response.json()
    if(!parsedNewReview.errors){
      setPizza({
        ...pizza,
        reviews: parsedNewReview.reviews
      })
      setErrors([])
    } else {
      setErrors(parsedNewReview.errors)
    }
  }
  
  let reviewArray = pizza.reviews.map((review, index) => {
    return(
      <ReviewTile name={review.name} body={review.body} rating={review.rating} user_photo={review.profile_photo} votes={pizza.votes[index]} user_email={review.user_email} key={review.id}/>
    )
  })

  return(
      <>
      <div className='single_pizza_show'>
        <PizzaTile pizza={pizza}/>
      </div>
        <div>
          <SinglePizzaReview addItem={addNewReview} pizzaId={pizzaId} errors={errors}/>
        </div>
        <div>
          {reviewArray}
        </div>
      </>
  )
}

export default PizzaShowContainer