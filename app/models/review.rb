class Review < ApplicationRecord
  validates :name, presence: true
  validates :rating, presence: true
  validates :body, presence: true
  belongs_to :pizza
  
  has_many :votes
  has_many :votants, through: :vote

  belongs_to :user
end