# app/modles/brand.rb
class Brand < ApplicationRecord
  validates :name, presence: true

  has_many :pizzas
end