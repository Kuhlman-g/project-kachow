import React, { useState, useEffect } from "react"

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
      <li key={brand.id}>
        {brand.name}
      </li>
    )
  })

  return(
    <div>
      <h3> Brands: </h3>
      <ul>
        {brandTiles}
      </ul>
    </div>
  )
}

export default BrandsIndexContainer