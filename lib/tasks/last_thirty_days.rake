require 'pry'
task :last_thirty_days do 
  api_dates = (1.month.ago.to_date..Date.today).map{ |date| date }
  @past_thirty_days = []

 api_dates.each do |date| 
  response = RestClient::Request.execute(
    method: "GET",
    url: "https://api.nasa.gov/planetary/apod?api_key=" + ENV["api_key"] + "&date=#{date}"
  )   
  @result = JSON.parse(response.body)
  @past_thirty_days << @result
 end 
 binding.pry
  return @past_thirty_days

end 