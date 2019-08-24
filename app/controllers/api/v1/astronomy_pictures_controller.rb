require 'pry'
module Api 
  module V1
class AstronomyPicturesController < ApplicationController

  def show 
    
  end 

  def index 
    date = Date.today 
    @todays_picture = AstronomyPicture.find_or_create_by(date: date)
   
    if user_signed_in? && @todays_picture.explanation != nil 
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @todays_picture }
      end
    else 
      binding.pry
        
    end
      
  end 
end
end 
end 

