class PizzasController < ApplicationController
  def index
    @pizza_brands = Pizza.brandOnly 
  end
end