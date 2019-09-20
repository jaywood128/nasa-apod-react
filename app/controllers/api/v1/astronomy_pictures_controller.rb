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

      def show 
     
        time = Time.new 
        formatted_date = time.strftime("%Y-%m-%d") 
        date = params[:date] == "today" ? formatted_date  :  params[:date] 
          
        @todays_picture = AstronomyPicture.find_by(date: date)
      
        if @todays_picture == nil 
          AstronomyPicture.create_todays_picture(date)
        end 
        render json: @todays_picture.to_json 
      end 

      def search 
        binding.pry
      end 

      def index   
        AstronomyPicture.load_last_thirty_days()
        render :json => AstronomyPicture.all
      end 
      
    end 
  end 
end 

