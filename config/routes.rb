 Rails.application.routes.draw do
  resources :comments
  resources :astronomy_pictures
  devise_for :users
    get 'welcome/home'
    get '/app', to: 'welcome#app', as: 'app'
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'welcome#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
