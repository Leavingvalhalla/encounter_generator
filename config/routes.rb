Rails.application.routes.draw do
  namespace :api do
  resources :creatures, only:[:index, :show]
  get '/cr/', to: 'creatures#cr'
  get '/environments', to: 'creatures#environments'
  get 'search/:cr/', to: 'creatures#search'
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

