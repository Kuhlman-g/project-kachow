class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :body

  attribute :user_email do
    object.user.email
  end

  attribute :profile_photo do
    object.user.profile_photo
  end

  belongs_to :user
  has_many :votes
end