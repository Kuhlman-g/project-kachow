class Pizza < ApplicationRecord
  validates :product_name, presence: true
  validates :cost, numericality: true, allow_blank: true
  belongs_to :brand
  has_many :reviews
  
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