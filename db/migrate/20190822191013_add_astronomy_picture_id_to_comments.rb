class AddAstronomyPictureIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :astronomy_picture_id, :integer 
  end
end
