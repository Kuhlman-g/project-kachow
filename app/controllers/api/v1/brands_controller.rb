class Api::V1::BrandsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    render json: Brand.all
  end

  def show
    select_brand = Brand.find(params[:id])
    render json: {brand: select_brand, pizzas: select_brand.pizzas}
  end

  def create
    binding.pry
  end
end