import React from 'react'
import { Link } from 'react-router-dom'


const BrandShowTile = (props) => {

    return(
      <div className='cell small-4 pizzaCard'>
        <div className='card'>
          <div className='card-section text-center'  key={props.id}>
            <Link to={`/pizza/${props.id}`}>{props.name}</Link>
          </div>
        </div>
      </div>
    )
}

export default BrandShowTile