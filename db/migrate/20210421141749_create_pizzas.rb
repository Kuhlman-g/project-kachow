class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :product_name, null: false
      t.float :cost
      t.belongs_to :brand, null: false

      t.timestamps null: false
    end
  end
end
