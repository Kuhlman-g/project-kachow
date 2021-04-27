Rails.application.routes.draw do
  root "homes#index"
  devise_for :users

  get '/pizzas', to: 'homes#index'
  get '/pizzas/:id', to: 'homes#index'
  get '/pizza/:id', to: 'homes#index'
  
  namespace :api do
    namespace :v1 do
      resources :brands, only: [:index, :show, :new]
    end
  end
end
