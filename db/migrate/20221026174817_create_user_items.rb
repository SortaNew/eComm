class CreateUserItems < ActiveRecord::Migration[7.0]
  def change
    create_table :user_items do |t|
      t.integer :user_id
      t.integer :item_id
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
