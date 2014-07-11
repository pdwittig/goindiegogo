Goindiegogo::Application.routes.draw do
  root 'campaigns#new'
  resources :campaigns, only: [:index, :new, :create, :show]
end
