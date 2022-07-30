Rails.application.routes.draw do
  resources :creatures, only:[:index, :show]
  get '/cr/', to: 'creatures#cr'
  get '/environments', to: 'creatures#environments'
  get 'search/:cr/', to: 'creatures#search'
end

