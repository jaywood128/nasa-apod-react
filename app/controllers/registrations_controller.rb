class RegistrationsController < Devise::RegistrationsController 
  # skip_before_filter :verify_authenticity_token, :only => :create
  # protected 

  # def after_sign_in_path_for(resource)
  #   app_path 
  # end
end
