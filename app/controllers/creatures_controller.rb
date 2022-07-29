class CreaturesController < ApplicationController

    def index
        render json: Creature.all
    end

    def show
        render json: Creature.find(params[:id])
    end

    def cr
        render json: Creature.where("cr = ?", params[:cr])
    end

    def environments
        render json: Creature.select('distinct(environment)')
    end

end
