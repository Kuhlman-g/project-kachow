class Api::V1::PizzasController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    selected_pizza = Pizza.find(params[:id])
    render json: {pizza: selected_pizza, brand: selected_pizza.brand, reviews: selected_pizza.reviews} 
  end

  # def create
  #   review = Review.new(review_params)
  #   pizza = review.pizza

  #   if review.save
  #     errors = "Review added successfully."
  #     render json: pizza.reviews
  #   else
  #     render json: review.errors
  #   end
  # end

  # private

  # def review_params
  #   params.require(:review).permit(:name, :rating, :body, :pizza)
  # end
  
end