require 'pry'
require 'rest-client'
require 'json'
require 'rake'
load './lib/tasks/last_thirty_days.rake'
Rake::Task.clear # necessary to avoid tasks being loaded several times in dev mode
NasaApodReact::Application.load_tasks 

module Api 
  module V1
class AstronomyPicturesController < ApplicationController


  def load 
    date = Date.today.to_s 

    @todays_picture = AstronomyPicture.find_or_create_by(date: date )
   
    if @todays_picture.explanation != nil 
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @todays_picture }
      end
    else
      Rake::Task[:last_thirty_days].reenable # in case you're going to invoke the same task second time.
      Rake::Task[:last_thirty_days].invoke
      @all = AstronomyPicture.all
        respond_to do |format|
          format.json { render :json => @all }
        end 

  #     response = RestClient::Request.execute(
  #       method: "GET",
  #       url: "https://api.nasa.gov/planetary/apod?api_key=" + ENV["api_key"] 
  #   )   
  #   @results = JSON.parse(response.body)
      

  #  @todays_astronomy_picture = AstronomyPicture.create do |astro|
  #     astro["copyright"] = @results["copyright"]
  #     astro["date"] = @results["date"]
  #     astro["explanation"] = @results["explanation"]
  #     astro["hdurl"] = @results["hdurl"] 
  #     astro["media_type"] = @results["media_type"]
  #     astro["service_version"] = @results["service_version"]
  #     astro["title"] = @results["title"]
  #     astro["url"] = @results["url"]
  #   end 
    
  #   render json: @todays_astronomy_picture
      

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

