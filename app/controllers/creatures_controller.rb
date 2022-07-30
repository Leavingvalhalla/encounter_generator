class CreaturesController < ApplicationController

    def index
        render json: Creature.all
    end

    def show
        render json: Creature.find(params[:id])
    end

    def cr
        render json: Creature.select('distinct(subtype1)')
    end

    def environments
        render json: Creature.select('distinct(environment)')
    end

    def search
        render json: Creature.where('Cr = ? AND environment = ? AND maintype = ? AND subtype1 = ?', 
            params[:cr])
            # , params[:environment], params[:maintype], params[:subtype1])
    end

end
