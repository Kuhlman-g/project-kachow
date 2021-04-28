class Api::V1::PizzasController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def show
    selected_pizza = Pizza.find(params[:id])
    render json: {pizza: selected_pizza, brand: selected_pizza.brand, reviews: selected_pizza.reviews} 
  end

  def new
    pizza = Pizza.find(params[:id])
    review = Review.new
  end

  def create
    pizza_id = params[:pizza].to_i
    pizza = Pizza.find(params[:pizza])
    review = Review.new(name: params[:name],body: params[:body],rating: params[:rating], pizza_id: pizza_id)
    pizza = review.pizza

    if review.save
      flash.now[:notice] = "Review added successfully."
      render json: pizza.reviews
    else
      flash.now[:error] = "#{review.errors.full_messages.to_sentence}"
    end
  end
  
end