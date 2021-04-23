class Api::V1::PizzasController < ApplicationController
  def index
    # @pizza_brands = Pizza.brandOnly 
    render json: Brand.all
  end

  def show
    render json: Brand.find(params[:id]).pizzas
  end
end