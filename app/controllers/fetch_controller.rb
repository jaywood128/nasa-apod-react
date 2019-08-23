class FetchController < ApplicationController
  def getApod
    @resp = Faraday.get 'https://api.nasa.gov/planetary/apod' do |req|
      req.params['api_key'] = env("api_key", 'somedefaultvalue')
    end 
    body_hash = JSON.parse(@resp.body)
  end
end
