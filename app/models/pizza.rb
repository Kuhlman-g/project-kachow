class Pizza < ApplicationRecord
  validates :brand, presence: true
  validates :product_name, presence: true
  validates :cost, numericality: true, allow_blank: true
  
  def self.brandOnly
    allPizzas = Pizza.all
    pizzaBrands = []

    allPizzas.each do |pizza|
      if !pizzaBrands.include?(pizza.brand)
        pizzaBrands << pizza.brand
      end
    end
    return pizzaBrands
  end
  

end