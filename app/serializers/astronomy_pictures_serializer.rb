class AstronomyPicturesSerializer < ActiveModel::Serializer
  attributes :id
  has_many :user_astronomy_pictures
  attributes: :user_id, :astronomy_picture_id, :is_favorite
end
