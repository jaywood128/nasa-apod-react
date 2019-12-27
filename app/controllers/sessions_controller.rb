class SessionsController < Devise::RegistrationsController 
  skip_before_action :verify_authenticity_token, :only => :create
end 