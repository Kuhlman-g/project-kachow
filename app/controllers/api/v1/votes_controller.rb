class VotesController < ApplicationController

    def create
      binding.pry
      vote = Vote.new(vote_params)
      review = vote.review
      
      if vote.save
        render json: review, serializer: ReviewSerializer
      else 
        render json: {errors: review.errors.full_messages}
      end
    end

    private
  
    def vote_params
       params.require(:vote).permit(:user_id, :review_id, :vote_type)
    end
  end 

 