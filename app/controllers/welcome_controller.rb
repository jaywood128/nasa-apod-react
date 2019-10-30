class WelcomeController < ApplicationController
  # before_action :authenticate_user!, only: [:app]
  def home
    if user_signed_in?
      redirect_to app_path
    end
  end

  def app
  end
end
