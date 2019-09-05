
class AstronomyPicture < ApplicationRecord
  has_many :comments

  def self.load_last_thirty_days 
    NasaApiService.get_last_thirty_days.each do |picture| 
      
      AstronomyPicture.find_or_create_by(
        copyright: picture["copy_right"], 
        date: picture["date"], 
        explanation: picture["explanation"],
        hdurl: picture["hdurl"],
        media_type: picture["media_type"], 
        title: picture["title"],
        url: picture["url"], 
        service_version: picture["service_version"]
      )
    end 
  end
  def to_param
    date 
  end
  def self.create_todays_picture(date)
    picture = NasaApiService.get_picture_by_date(date)
    AstronomyPicture.find_or_create_by(picture)
  end 
end
