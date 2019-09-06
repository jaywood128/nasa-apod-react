class NasaApiService 

  def self.get_last_thirty_days
    api_dates = (1.month.ago.to_date..Date.today).map{ |date| date }
  
    api_dates.map do |date| 
      self.get_picture_by_date(date) 
    end 
  end 
  def self.get_picture_by_date(date)
   
    response = RestClient::Request.execute(
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=" + ENV["api_key"] + "&date=#{date}"
    )   
    JSON.parse(response.body) 
  end 
end 