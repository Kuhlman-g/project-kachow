class Review < ApplicationRecord
  validates :name, presence: true
  validates :rating, presence: true
  validates :body, presence: true
  belongs_to :pizza, presence: true
end