class Pizza < ApplicationRecord
  validates :brand, presence: true
  validates :product_name, presence: true
  #validates :cost, :allow_nil true

end