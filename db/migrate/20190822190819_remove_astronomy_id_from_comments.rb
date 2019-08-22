class RemoveAstronomyIdFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :astronomy_id, :integer 
  end
end
