import React, { useState, useEffect } from "react"

const PizzasIndexContainer = (props) => {
  const [pizzas, setPizzas] = useState([])

  const fetchPizzas = async () => {
    const response = await fetch("/api/v1/pizzas")
    const parsedPizzas = await response.json()
    setPizzas(parsedPizzas)
  }

  useEffect(() => {
    fetchPizzas()
  }, [])

  let pizzaTiles = pizzas.map((brand) => {
    return(
      <li key={brand.id}>
        {brand.name}
      </li>
    )
  })

  return(
    <div>
      <h3> Pizzas Index </h3>
      {pizzaTiles}
    </div>
  )
}

export default PizzasIndexContainer