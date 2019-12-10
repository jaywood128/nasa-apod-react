class ApplicationController < ActionController::Base
  
  protect_from_forgery prepend: true
 
  def after_sign_in_path_for(resource)
    app_path 
  end

  def after_sign_up_path_for(resource)
    app_path 
  end

end
