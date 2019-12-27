class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  # before_action :authenticate_user!, only: [:app]
  # skip_before_action :verify_authenticity_token



end
