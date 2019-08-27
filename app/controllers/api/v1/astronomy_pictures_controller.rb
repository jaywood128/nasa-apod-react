require 'pry'
require 'json'
require 'rest-client' 
module Api 
  module V1
class AstronomyPicturesController < ApplicationController

  def show 
    date = Date.today.to_s 

    @todays_picture = AstronomyPicture.find_or_create_by(date: date )
   
    if @todays_picture.explanation != nil 
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @todays_picture }
      end
    else
     
    #   response = RestClient::Request.execute(
    #     method: "GET",
    #     url: "https://api.nasa.gov/planetary/apod",  
    #     headers: { Authorization: "Bearer #{ENV["API_KEY"]}" }  
    # )    
    
    # @results = JSON.parse(response.body)
    response = RestClient.get 'https://api.nasa.gov/planetary/apod', {accept: :json}
    binding.pry
    
    end

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
  
    
        
    end
      
  end 
end
end 
end 

