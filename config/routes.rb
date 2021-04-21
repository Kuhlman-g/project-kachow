Rails.application.routes.draw do
  root 'pizzas#index'
  devise_for :users

  resources :pizzas, only: [:index]
end
