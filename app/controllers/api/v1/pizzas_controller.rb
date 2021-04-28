class Api::V1::PizzasController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    selected_pizza = Pizza.find(params[:id])
    render json: {pizza: selected_pizza, brand: selected_pizza.brand, reviews: selected_pizza.reviews} 
  end

end