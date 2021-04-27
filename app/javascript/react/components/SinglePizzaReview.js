import React, {useState, useEffect} from "react"

const SinglePizzaReview = (props) => {
  const [reviewData, setReviewData] = useState({
    name: "",
    rating: "",
    body: "",
		pizza: props.pizzaId
	})
    const handleChange = (event) => {
        setReviewData({
            ...reviewData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const formSubmitCallback = (event) =>{
        event.preventDefault()
        props.addItem(reviewData)
        handleClearForm()
    }

    const handleClearForm = () =>{
        console.log("Cleared!")

        setReviewData({
            name: "",
            rating: "",
            body: ""
        })
    }
    
    return(
        <div>
	      <h1>Leave a Review!</h1>
	      <form onSubmit={formSubmitCallback}>
	        <div>
	            <label htmlFor="name">Review Name:
	                <input 
	                id="name" 
	                name="name"
	                type="text" 
	                value={reviewData.name}
	                onChange={handleChange}
	                />
	            </label>
	
	            <label htmlFor="rating">Rating
	                <input 
	                id="rating" 
	                name="rating"
	                type="number" 	                
                    value= {reviewData.rating}
	                onChange={handleChange}
	                min="1" 
	                max="100" /> 
	            </label>

                <label htmlFor="body">Review Details
	                <textarea 
	                id="body" 
	                name="body"	                
                    value= {reviewData.body}
	                onChange={handleChange}
	                 /> 
	            </label>
	
	            <input type="submit" value="Submit Review" className="btn" />
	        </div>
	      </form>
	    </div>
    )
}

export default SinglePizzaReview