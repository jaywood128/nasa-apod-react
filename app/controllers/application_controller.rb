class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  skip_before_action :verify_authenticity_token, :only => :create
  
  # def after_sign_in_path_for(resource)
  #   app_path 
  # end

  # def after_sign_up_path_for(resource)
  #   app_path 
  # end

end
