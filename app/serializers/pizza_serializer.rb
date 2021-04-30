class PizzaSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :cost, :votes

  belongs_to :brand
  has_many :reviews, each_serializer: ReviewSerializer
  
  def votes
    object.reviews.map do |review|
      review.votes
    end
  end
end
