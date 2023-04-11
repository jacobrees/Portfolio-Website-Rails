Rails.application.routes.draw do
  get 'pages/home'
  get '/about', to: 'pages#about'
  get '/projects', to: 'pages#projects'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "pages#home"
end
