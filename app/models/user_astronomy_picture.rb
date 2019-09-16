class UserAstronomyPicture < ApplicationRecord
  belongs_to :user 
  belongs_to :astronomy_picture
end
