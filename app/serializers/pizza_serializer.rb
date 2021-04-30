class PizzaSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :cost

<<<<<<< HEAD
  belongs_to :brand, serializer: BrandSerializer
  has_many :reviews, serializer: ReviewSerializer
end
=======
  belongs_to :brand
  has_many :reviews
end
>>>>>>> 4d07a13cf873a4ba9daa19273b242cbdb15c5c38
