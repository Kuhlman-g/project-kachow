Rails.application.routes.draw do
  root "homes#index"
  devise_for :users

  get '/brands', to: 'homes#index'
  get '/brands/:id', to: 'homes#index'

  get '/pizzas/:id', to: 'homes#index'

  
  namespace :api do
    namespace :v1 do
      resources :brands, only: [:index, :show] do
        resources :pizzas, only: [:show, :create]
      end
      resources :reviews, only: [:create]
      resources :votes, only: [:create]
    end
  end
end