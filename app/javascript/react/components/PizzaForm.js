import React, { useState } from "react";

const PizzaForm = (props) => {
  const [newPizza, setNewPizza] = useState({
    product_name: "",
    cost: "",
    brand_id: null
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

    const tempPizza = newPizza
    tempPizza.brand_id = props.brand_id
    setNewPizza(tempPizza)

    props.addPizza(newPizza)
    handleClearForm()
  }

  const handleClearForm = () => {
    setNewPizza({
      product_name: "",
      cost: "",
      brand_id: null
    })
  }

  const errorList = props.errors.map( error => {
      return(<li>{error}</li>)
    }
  );

  return(
    <div className="translucent-form-overlay">
      <div className='cell small-12 pizza_form_header'>
        <h3>Add a pizza for {props.brand_name}:</h3>
      </div>
      <div>
        {errorList}
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
          <label htmlFor="cost">Average cost (optional):
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
        
        <input type="submit" value="Submit Pizza" className="button" />
      </form>
    </div>
  )
}

export default PizzaForm