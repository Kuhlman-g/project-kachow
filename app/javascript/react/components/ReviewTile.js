import React from 'react'

const ReviewTile = (props) => {
  debugger
  return(
    <div className="callout cell large-12">
      <li>{props.name}</li>
      <li> {props.body}</li>
      <li> {props.rating}</li>
    </div>
  )
}

export default ReviewTile