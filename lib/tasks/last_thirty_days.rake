require 'pry'
task :last_thirty_days => :environment do 
  AstronomyPicture.load_last_thirty_days
end 