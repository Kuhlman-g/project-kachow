import React, { useState, useEffect } from "react"

const BrandsIndexContainer = (props) => {
  const [brands, setBrands] = useState([])

  const fetchBrands = async () => {
    const response = await fetch("/api/v1/brands")
    const parsedBrands = await response.json()
    setBrands(parsedBrands)
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  let brandTiles = brands.map((brand) => {
    return(
      <li key={brand.id}>
        {brand.name}
      </li>
    )
  })

  return(
    <div>
      <h3> Brands Index </h3>
      {brandTiles}
    </div>
  )
}

export default BrandsIndexContainer