Rails.application.routes.draw do
  get 'pages/home'
  get '/about', to: 'pages#about'
  get '/projects', to: 'pages#projects'
  get 'downloads/resume' => 'downloads#resume', as: :resume_download
  get 'contact', to: 'contact_form#new'
  post 'contact', to: 'contact_form#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "pages#home"
end
