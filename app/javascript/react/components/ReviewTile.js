import React from 'react'
import { useState, useEffect} from 'react'

const ReviewTile = (props) => {
  const [vote, setVote] = useState({
    vote_type: 0
  })

  const fetchVotes = async (formPayload) =>{
    try {
      const response = await fetch('api/v1/votes',{
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedVote = await response.json()
      debugger
       if(!parsedVote.errors){
        setVote({
          ...vote,
          vote_type: parsedVote
        })
      }
    } catch(error){
      console.error(`Error in fetch: ${error.message}`)
     }
  }

  const onClickUpvote = () => {
    setVote({
      ...vote,
      vote_type: vote.vote_type + 1
    })
    fetchVotes()
  }

  const onClickDownvote = () => {
    setVote({
      ...vote,
      vote_type: vote.vote_type - 1
    })
    fetchVotes()
  }

  useEffect( () => {
    fetchVotes()
  }, [])

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
            <h6 className="leftAlign">Votes:{vote.vote_type} </h6>
            <input type="submit" value="Upvote" className="btn" onClick={onClickUpvote}/>
            <input type="submit" value="Downvote" className="btn" onClick={onClickDownvote}/>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
