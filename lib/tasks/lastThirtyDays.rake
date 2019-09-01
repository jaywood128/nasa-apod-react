task :last_thirty_days do 
  api_dates = (1.month.ago.to_date..Date.today).map{ |date| date }
binding.pry
  response = RestClient::Request.execute(
    method: "GET",
    url: "https://api.nasa.gov/planetary/apod?api_key=" + ENV["api_key"] 
)   
@results = JSON.parse(response.body)

@todays_astronomy_picture = AstronomyPicture.create do |astro|
  astro["copyright"] = @results["copyright"]
  astro["date"] = @results["date"]
  astro["explanation"] = @results["explanation"]
  astro["hdurl"] = @results["hdurl"] 
  astro["media_type"] = @results["media_type"]
  astro["service_version"] = @results["service_version"]
  astro["title"] = @results["title"]
  astro["url"] = @results["url"]
end 

end 