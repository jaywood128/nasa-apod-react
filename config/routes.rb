 Rails.application.routes.draw do
  root 'welcome#home'
  get 'users_signout' => redirect("/")
  resources :comments
  namespace :api do 
    namespace :v1 do 
      resources :astronomy_pictures, param: :date 
        get '/load', to: 'astronomy_pictures#index'
        get '/search', to: 'astronomy_pictures#search', param: :date
        get '/astronomy_pictures/:date', to: 'astronomy_pictures#show' 
      resources :users 
        get '/add_picture_to_favorites/:date', to: 'users#create'
    end 
   
  end

  devise_for :users, controllers: { registrations: "registrations" }  
      get 'welcome/home'
      get '/app', to: 'welcome#app', as: 'app'
      # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
      # get 'users_signout' => redirect('/')
      get '*path' => redirect('/app')
    
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end




