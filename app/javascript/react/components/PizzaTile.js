import React from 'react'

const PizzaTile = (props) => {
  let cost_display

  if(props.pizza.cost != null) {
    cost_display = `Average cost is: $${props.pizza.cost}`
  }

  let total = 0
  let averageRating = 0
  let averageRatingDisplay

  if(props.pizza.reviews != null){
    props.pizza.reviews.forEach(review => {
      total += parseInt(review.rating)
    }
    );
    averageRating = total/props.pizza.reviews.length}

  if(props.pizza.reviews != null){
    averageRatingDisplay = `Average Rating is: ${averageRating}`
  }

  return(
    <div className= "cell">
      <div className= "card text-align-center pizzaShowCard">
        <h2>{props.pizza.product_name}</h2>
        <p>Brand: {props.pizza.brand}</p>
        <p>{cost_display}</p>
        <p>{averageRatingDisplay}</p>
      </div>
    </div>
  )
}

export default PizzaTile
