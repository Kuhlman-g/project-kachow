class Api::V1::PizzasController < ApplicationController
  before_action :authenticate_user, except: [:show]

  def show
    selected_pizza = Pizza.find(params[:id])

    render json: selected_pizza, serializer: PizzaSerializer
  end

  def create
    pizza = Pizza.new(pizza_params)
    brand = pizza.brand

    if pizza.save 
      render json: brand.pizzas, each_serializer: PizzaSerializer
    else
      render json: {errors: pizza.errors.full_messages}
    end
  end

  private

  def authenticate_user
    if !user_signed_in?
      render json: {errors: ["You need to be signed to leave a review!"]}
    end
  end

  def pizza_params 
    params.require(:pizza).permit(:product_name, :cost, :brand_id)
  end


end
