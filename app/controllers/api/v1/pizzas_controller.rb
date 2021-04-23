class Api::V1::PizzasController < ApplicationController
  def show
    render json: Pizza.find(params[:id]) 
  end
end