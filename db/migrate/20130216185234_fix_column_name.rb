class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :characters, :type, :type_of
  end
end
