class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review
  enum selectable_vote_types: [ :upvote, :downvote ]
end
