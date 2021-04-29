class PizzaSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :cost

  belongs_to :brand, serializer: BrandSerializer
  has_many :reviews
end
