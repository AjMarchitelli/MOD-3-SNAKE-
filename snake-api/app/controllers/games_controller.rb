class GamesController < ApplicationController
    before_action :set_game, only: [:show, :update, :destroy]
    # GET /games
    def index
        @games = Game.all
        render json: @games
    end

    # POST /games
    def create
        @game = Game.create(game_params)
        render json: @game
    end

    # GET /games/:id
    def show
        render json: @game
    end

    # DELETE /games/:id
    def destroy
        @game.destroy
    end

    #--------------------------------

    def game_params
        params.permit(:s1_wins, :s2_wins)
    end

    def set_game
        @game = Game.find(params[:id])
    end
end