class Api::V1::ReviewsController < ApplicationController
<<<<<<< HEAD
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user
=======
>>>>>>> 9dd0586b181fbde63548ade3da4ece0d4ab98812

  def create
    review = Review.new(review_params)
    review.user = current_user
    pizza = review.pizza

    if review.save
      errors = "Review added successfully."
      render json: pizza.reviews, each_serializer: ReviewSerializer
    else
      render json: {errors: review.errors.full_messages}
    end
  end
  
  private

  def authenticate_user
    if !user_signed_in?
      render json: {errors: ["You need to be signed to leave a review!"]}
    end
  end

  def review_params
    params.require(:review).permit(:name, :rating, :body, :pizza_id)
  end

end