Rails.application.routes.draw do
  root to: "homes#index"
  devise_for :users

  get '/pizzas', to: 'homes#index'
  get '/pizzas/:id', to: 'homes#index'

  
  namespace :api do
    namespace :v1 do
      resources :pizzas, only: [:index, :show]
    end
  end
end
