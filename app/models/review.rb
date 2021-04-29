class Review < ApplicationRecord
  validates :name, presence: true
  validates :rating, presence: true
  validates :body, presence: true
  belongs_to :pizza
  belongs_to :user
end