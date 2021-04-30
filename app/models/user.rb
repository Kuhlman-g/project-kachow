class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  has_many :votes
  has_many :liked_reviews, through: :votes
  
  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :reviews

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
