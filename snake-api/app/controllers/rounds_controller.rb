class RoundsController < ApplicationController
    
    #GET /rounds
    def index
        @rounds = Round.all
        render json: @rounds
    end

    #POST /rounds
    def create
        @round = Round.create(round_params)
        render json: @round
    end

    #GET /rounds/:id
    def show
        render json: @round
    end

    #DELETE /rounds/:id
    def destroy
        @show.destroy
    end
    #================================
    private 

    def round_params
        params.permit(:user_id, :game_id, :score)
    end
end