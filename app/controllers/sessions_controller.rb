class SessionsController < Devise::SessionsController 
  skip_before_action :verify_authenticity_token, :only => :create
  
  def after_sign_in_path_for(resource)
    '/app'
  end 

  
end 