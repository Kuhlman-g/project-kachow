class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
    @pizza_brands = []
    
    @pizzas.each do |pizza|
      if !@pizza_brands.include?(pizza.brand)
        @pizza_brands << pizza.brand
      end
    end
  end
end