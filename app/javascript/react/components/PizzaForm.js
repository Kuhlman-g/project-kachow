// Form for adding new pizza to a branch. A user can add this. 

import React, { useState } from "react";

const PizzaForm = (props) => {
  const [newPizza, setNewPizza] = useState({
    product_name: "",
    cost: null,
    brand_id: props.brand_id
  })

  const handleChange = (event) => {
    event.preventDefault()
    setNewPizza({
      ... newPizza,
      [event.currentTarget.name]: event.currentTarget.value
    })
  } 

  return(
    <div className='cell small-4 medium-10 pizza_for'>
      <h3>Add a pizza for {props.brand_name}:</h3>
      <form>
        <label htmlFor="product_name">Pizza:
          <input 
            id='product_name:'
            name='product_name'
            type='text'
            value = {newPizza.product_name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="cost">Average cost:
          <input 
            id='cost:'
            name='cost'
            type='float'
            value = {newPizza.cost}
            onChange={handleChange}
          />
        </label>
        
        <input type="submit" value="Submit Pizza" className="btn" />
        

      </form>
    </div>
  )
}

export default PizzaForm