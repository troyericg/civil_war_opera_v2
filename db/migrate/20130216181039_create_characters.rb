class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :codename
      t.string :realname
      t.string :gender
      t.string :status
      t.string :alignment
      t.string :type
      t.string :team
      t.boolean :antiregistration
      t.integer :num_appearances
      t.boolean :haspicture

      t.timestamps
    end
  end
end
