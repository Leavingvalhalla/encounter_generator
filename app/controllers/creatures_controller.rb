class CreaturesController < ApplicationController
    namespace :api do
    def index
        render json: Creature.all
    end
end

end
