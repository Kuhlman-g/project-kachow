class Api::V1::PizzasController < ApplicationController
  def show
    selected_pizza = Pizza.find(params[:id])
    render json: {pizza: selected_pizza, brand: selected_pizza.brand} 
  end
end