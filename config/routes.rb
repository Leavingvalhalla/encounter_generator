Rails.application.routes.draw do
  resources :creatures, only:[:index, :show]
  get '/cr/:cr', to: 'creatures#cr'
end

