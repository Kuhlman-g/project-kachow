class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :reviews
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
