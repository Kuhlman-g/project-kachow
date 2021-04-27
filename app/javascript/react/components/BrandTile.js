import React from 'react'
import { Link } from 'react-router-dom'

const BrandTile = (props) => {

	return(
		<div className='cell small-4 pizzaCard'>
			<div className='card'>
				<div className='card-section text-center'>
					<Link to={`/pizzas/${props.id}`}>{props.name}</Link>
				</div>
			</div>
		</div>
	)
}

export default BrandTile
