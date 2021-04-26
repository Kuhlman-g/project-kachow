import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"

const BrandsIndexContainer = (props) => {
  const [brands, setBrands] = useState([])

  const fetchBrands = async () => {
    try {
      const response = await fetch("/api/v1/brands")
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedBrands = await response.json()
      setBrands(parsedBrands)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  const brandTiles = brands.map((brand) => {
    return(
    <div class='cell small-4 pizzaCard'>
      <div class='card'>
        <div class='card-section text-center' key={brand.id}>
          <Link to={`/pizzas/${brand.id}`}>{brand.name}</Link>
        </div>
      </div>
    </div>
    )
  })

  return(
  <>
    <div  className='cell small-11 text-center'>
      <h3> Brands: </h3>
    </div>
        {brandTiles}
  </>
  )
}

export default BrandsIndexContainer