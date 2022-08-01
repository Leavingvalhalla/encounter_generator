class CreaturesController < ApplicationController

    def index
        render json: Creature.all
    end

end
