class VotesController < ApplicationController

    def create
      vote = Vote.new(vote_params)
      if vote.save
      else 
      end
    end

    private
  
    def vote_params
       params.require(:vote).permit(:user_id, :review_id, :vote_type)
    end
  end