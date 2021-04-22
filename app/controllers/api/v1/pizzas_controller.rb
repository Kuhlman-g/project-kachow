class Api::V1::PizzasController < ApplicationController
  def index
    # @pizza_brands = Pizza.brandOnly 
    render json: Pizza.all
  end

  def show
    render json: Pizza.find(params[:id])
  end
end