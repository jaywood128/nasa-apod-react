class AddServiceVersionToAstronomyPicture < ActiveRecord::Migration[5.2]
  def change
    add_column :astronomy_pictures, :service_version, :string  
  end
end
