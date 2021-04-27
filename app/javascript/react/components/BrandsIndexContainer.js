import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import BrandTile from "./BrandTile.js"


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
      <BrandTile key={brand.id} id={brand.id} name={brand.name} />
    )
  })

  return(
  <div className='grid-x grid-margin-x align-spaced pizzaContainer'>
    <div  className='cell small-11 text-center'>
      <h3> Brands: </h3>
    </div>
    {brandTiles}
  </div>
  )
}

export default BrandsIndexContainer