class VotesController < ApplicationController

    def create
      vote = Vote.new(vote_params)
      if vote.save
        #do something
      else 
        # flash that something went wrong
      end
    end

    private
  
    def vote_params
       params.require(:vote).permit(:user_id, :review_id, :vote_type)
    end
  end