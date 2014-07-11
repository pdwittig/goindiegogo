Goindiegogo::Application.routes.draw do
  root 'campaigns#new'
  resources :campaigns, only: [:new, :create, :show]
end
