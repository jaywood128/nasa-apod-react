class CreateUserAstronomyPictures < ActiveRecord::Migration[5.2]
  def change
    create_table :user_astronomy_pictures do |t|
      t.integer :user_id
      t.integer :astronomy_picture_id
      t.boolean :is_favorite

      t.timestamps
    end
  end
end
