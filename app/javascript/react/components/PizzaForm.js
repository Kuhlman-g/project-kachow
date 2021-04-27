// Form for adding new pizza to a branch. A user can add this. 

import React, { useState } from "react";

const PizzaForm = (props) => {
  const [newPizza, setNewPizza] = useState({
    product_name: "",
    cost: "",
    brand_id: props.brand_id
  })

  const handleChange = (event) => {
    event.preventDefault()
    setNewPizza({
      ... newPizza,
      [event.currentTarget.name]: event.currentTarget.value
    })
  } 

  const formSubmitCallback = (event) => {
    event.preventDefault()
    props.addPizza(newPizza)
    handleClearForm()
  }

  const handleClearForm = () => {
    setNewPizza({
      product_name: "",
      cost: "",
      brand_id: props.brand_id
    })
  }

  return(
    <div className='cell small-11 grid-x grid-margin-x align-spaced'>
      <div className='cell small-10'>
        <h3>Add a pizza for {props.brand_name}:</h3>
      </div>
      <form onSubmit={formSubmitCallback}>
        <div className='cell small-10 medium-5'>
          <label htmlFor="product_name">Pizza:
            <input 
              id='product_name:'
              name='product_name'
              type='text'
              value = {newPizza.product_name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className='cell small-10 medium-5'>
          <label htmlFor="cost">Average cost:
            <input 
              id='cost:'
              name='cost'
              type='number'
              step='0.01'
              min="0.00"
              value = {newPizza.cost}
              onChange={handleChange}
            />
          </label>
        </div>
        
        <input type="submit" value="Submit Pizza" className="btn" />
      </form>
    </div>
  )
}

export default PizzaForm