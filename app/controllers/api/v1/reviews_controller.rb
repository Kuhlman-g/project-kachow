class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    review = Review.new(review_params)
    pizza = review.pizza

    if review.save
      errors = "Review added successfully."
      render json: {reviews: pizza.reviews, errors: errors}
    else
      render json: {errors: review.errors.full_messages}
    end
  end

  private

  def review_params
    params.require(:review).permit(:name, :rating, :body, :pizza_id)
  end

end