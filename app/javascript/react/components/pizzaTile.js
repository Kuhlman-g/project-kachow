import React from 'react'

const PizzaTile = (props) => {

  return(
    <>
      <h2>{props.pizza.product_name}</h2>
      <p>Brand: {props.pizza.brand}</p>
      <p>Cost: {props.pizza.cost}</p>
    </>
  )
}

export default PizzaTile