class Api::V1::PizzasController < ApplicationController

  def show
    selected_pizza = Pizza.find(params[:id])

    render json: selected_pizza, serializer: PizzaSerializer
  end
end
