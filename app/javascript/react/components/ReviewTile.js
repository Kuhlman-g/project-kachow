import React from 'react'

const ReviewTile = (props) => {
  return(
    <div className="cell large-12 reviewCard">
      <div className="media-object">
        <div className="media-object-section">
            <div className="thumbnail">
              <img className="user_photo" src={props.user_photo.url}/>
            </div>
        </div>
        <div className="media-object-section main-section">
          <h5 className="userStyle">User: {props.user_email}</h5>
          <h6 className="reviewTitle"> {props.name}</h6>
            <p className="reviewBody"> {props.body}</p>
            <ul className="ratingStyle">Pizza Rating: {props.rating}</ul>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile