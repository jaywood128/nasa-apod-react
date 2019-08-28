class AddCopyRightToAstronomyPicture < ActiveRecord::Migration[5.2]
  def change
    add_column :astronomy_pictures, :copy_right, :string 
  end
end
