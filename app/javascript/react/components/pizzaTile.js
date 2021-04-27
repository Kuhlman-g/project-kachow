import React from 'react'

const PizzaTile = (props) => {
  let cost_display
  if(props.pizza.cost != null) {
    cost_display = `Average cost is: $${props.pizza.cost}`
  }

  return(
    <>
      <h2>{props.pizza.product_name}</h2>
      <p>Brand: {props.pizza.brand}</p>
      <p>{cost_display}</p>
    </>
  )
}

export default PizzaTile
